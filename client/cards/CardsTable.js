/**
 * Created by bberman on 1/16/17.
 */
import React from 'react';
import {MeteorGriddle} from 'meteor/utilities:meteor-griddle';
import CardsTableLoading from './CardsTableLoading';
import CardsTableNameColumn from "./CardsTableNameColumn";
import './griddle.css';

export default class CardsTable extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: '_id',
            displayName: 'ID',
            customComponent: CardsTableNameColumn
        }, {
            columnName: 'gameDefinition.name',
            displayName: 'Name',
        }, {
            columnName: 'gameDefinition.description',
            displayName: 'Description',
        }];
        return (<MeteorGriddle
            publication='cards'
            collection={Cards}
            matchingResultsCount="cards-count"
            columns={['_id', 'gameDefinition.name', 'gameDefinition.description']}
            columnMetadata={columnMetadata}
            filteredFields={['_id', 'gameDefinition.name', 'gameDefinition.description']}
            showFilter
            externalLoadingComponent={CardsTableLoading}
        />);
    }
}