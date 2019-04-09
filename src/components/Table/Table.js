import React from 'react';

import TableRows from '../TableRows/TableRows';
import './Table.css';

const table = props => {

    return (
        <table className="Table">
            <thead>
                <tr>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'id')}
                    >id</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'firstName')}
                    >first name</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'lastName')}
                    >last name</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'email')}
                    >email</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'phone')}
                    >phone</th>
                </tr>
            </thead>
            <TableRows
                tableData={props.data}
                showInfoHandler={props.showInfoHandler}
            />
        </table>
    );
};

export default table;