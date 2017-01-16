/**
 * Created by bberman on 1/16/17.
 */
import React from 'react';
import {MeteorGriddle} from 'meteor/utilities:meteor-griddle';
import {CardsTableLoading} from './CardsTableLoading';

export default class CardsTable extends React.Component {
    render() {
        return (<MeteorGriddle
            publication='cards'
            collection={Cards}
            matchingResultsCount="cards-count"
            columns={['_id', 'gameDefinition.name', 'gameDefinition.description']}
            filteredFields={['_id', 'gameDefinition.name', 'gameDefinition.description']}
            showFilter
            externalLoadingComponent={CardsTableLoading}
        />);
    }
}