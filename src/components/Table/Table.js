import React from 'react';

import TableRows from '../TableRows/TableRows';
import './Table.css';

const table = props => {
    let classes = 'Ascending';

    if (props.sortingOrder === 'desc') {
        classes = 'Descending';
    }

    const onMouseDown = (event) => {
        event.preventDefault();
    }

    return (
        <table className="Table">
            <thead onMouseDown={onMouseDown}>
                <tr>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'id')}
                        className={classes}
                    >Id</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'firstName')}
                        className={classes}
                    >First Name</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'lastName')}
                        className={classes}
                    >Last Name</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'email')}
                        className={classes}
                    >Email</th>
                    <th
                        onClick={props.sortColumnHandler.bind(this, 'phone')}
                        className={classes}
                    >Phone</th>
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