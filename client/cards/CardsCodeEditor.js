/**
 * Created by bberman on 1/16/17.
 */
import React from 'react';
import CodeMirror from 'react-codemirror';
import '../../node_modules/codemirror/lib/codemirror.css';
import './codemirror.css';
import {createContainer} from 'meteor/react-meteor-data';
import JSONLint from 'json-lint';
import {notify} from 'react-notify-toast';
import {updateCard} from '../../methods'

require('codemirror/mode/javascript/javascript');

class CardsCodeEditor extends React.Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.notify = this.notify.bind(this);
        this.revert = this.revert.bind(this);
        this.undo = this.undo.bind(this);
    }

    componentDidMount() {
        $('.dropdown-toggle').dropdown();
    }

    notify(body, type = 'success') {
        notify.show(body, type, 6000);
    }

    revert() {
        this.codeMirror.getCodeMirror().getDoc().setValue(this.originalJson);
    }

    undo() {
        this.codeMirror.getCodeMirror().undo();
    }

    save() {
        const jsonString = this.codeMirror.getCodeMirror().getDoc().getValue();
        const lint = JSONLint(jsonString);
        if (lint.error) {
            this.notify(
                <span style={{fontSize: '10pt'}}>Error: {lint.error} (L:{lint.line})</span>,
                'error'
            );

            return;
        }

        const gameDefinition = JSON.parse(jsonString);

        if (gameDefinition.id !== this.props.cardId) {
            this.notify(
                <span>Error: The game definition ID does not match the card ID. Cannot save.</span>,
                'error'
            );

            return;
        }

        updateCard.call({
            cardId: this.props.cardId,
            update: {$set: {gameDefinition: gameDefinition}}
        }, (err, result) => {
            if (err) {
                this.notify(
                    <span>Error: {err.message}</span>,
                    'error'
                )
            } else {
                this.notify(
                    <span>Saved.</span>
                );
            }
        });
    }

    render() {
        const options = {
            mode: {
                name: 'javascript',
                json: true
            },
            lineNumbers: true,
            viewportMargin: Infinity
        };

        const card = this.props.card;
        const isReady = this.props.isReady;

        if (!isReady) {
            return (
                <p>Loading...</p>
            );
        }

        const dropdownAttributes = {
            'data-toggle': 'dropdown',
            'aria-haspopup': 'true',
            'aria-expanded': 'false'
        };

        this.originalJson = JSON.stringify(card && card.gameDefinition, null, '\t');

        return (
            <div className="CodeMirror-container">
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">{card.gameDefinition.name}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"
                               role="button" {...dropdownAttributes}>File</a>
                            <div className="dropdown-menu">
                                <a onClick={this.save} className="dropdown-item" href="#">Save</a>
                                <a onClick={this.revert} className="dropdown-item" href="#">Revert</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"
                               role="button" {...dropdownAttributes}>Edit</a>
                            <div className="dropdown-menu">
                                <a onClick={this.undo} className="dropdown-item" href="#">Undo</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <CodeMirror
                    ref={(instance) => {
                        this.codeMirror = instance;
                    }}
                    options={options}
                    value={this.originalJson}
                />
            </div>
        )
    }
}

CardsCodeEditor.propTypes = {
    cardId: React.PropTypes.string,
    card: React.PropTypes.object,
    isReady: React.PropTypes.bool
};

export default CardsCodeEditorContainer = createContainer(function (params) {
    const {cardId} = params;
    var handle = Meteor.subscribe('card', cardId);

    return {
        isReady: handle.ready(),
        card: Cards.findOne(cardId)
    };
}, CardsCodeEditor);