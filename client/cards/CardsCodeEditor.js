/**
 * Created by bberman on 1/16/17.
 */
import React from 'react';
import CodeMirror from 'react-codemirror';
import '../../node_modules/codemirror/lib/codemirror.css';
import {createContainer} from 'meteor/react-meteor-data';

require('codemirror/mode/javascript/javascript');


class CardsCodeEditor extends React.Component {
    render() {
        const options = {
            mode: {
                name: 'javascript',
                json: true
            }
        };

        const cardId = this.props.cardId;
        const card = this.props.card;
        const isReady = this.props.isReady;

        if (!isReady) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <div>
                <CodeMirror
                    options={options}
                    value={JSON.stringify(card && card.gameDefinition, null, '\t')}
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