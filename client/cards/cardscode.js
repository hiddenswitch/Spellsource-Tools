/**
 * Created by bberman on 1/16/17.
 */
import {Template} from 'meteor/templating';
import './cardscode.html';
import CardsCodeEditorContainer from './CardsCodeEditor';

require('codemirror/mode/javascript/javascript');

Template.cardsCodeEditor.helpers({
    CardsCodeEditorContainer() {
        return CardsCodeEditorContainer;
    },

    cardId() {
        return FlowRouter.getParam('cardId');
    }
});