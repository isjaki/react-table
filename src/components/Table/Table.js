import React from 'react';

import TableRows from '../TableRows/TableRows';
import './Table.css';

const table = props => {

    return (
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
                showInfoHandler={props.showInfoHandler}
            />
        </table>
    );
};

export default table;