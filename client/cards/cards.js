/**
 * Created by bberman on 1/16/17.
 */
import {Template} from 'meteor/templating';
import './cards.html';
import CardsTable from './CardsTable';

Template.cards.helpers({
    CardsTable() {
        return CardsTable;
    }
});