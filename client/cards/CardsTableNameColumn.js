/**
 * Created by bberman on 1/16/17.
 */
import React from 'react';

export default class CardTableNameColumn extends React.Component {
    render() {
        const url = '/cards/{0}'.format(this.props.rowData._id);
        return (
            <a href={url}>{this.props.data}</a>
        )
    }
}