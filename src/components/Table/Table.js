import React from 'react';

import TableRows from '../TableRows/TableRows';
import './Table.css';

const table = props => (
    <table className="Table">
        <thead>
            <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>phone</th>
            </tr>
        </thead>
        <TableRows
            tableData={props.data}
        />
    </table>
);

export default table;