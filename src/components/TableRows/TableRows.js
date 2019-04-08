import React from 'react';

import TableRow from './TableRow/TableRow';

const tableRows = props => {
    const tableRowsArray = props.tableData.map((tableRow, index) => {
        return <TableRow
            id={tableRow.id}
            firstName={tableRow.firstName}
            lastName={tableRow.lastName}
            email={tableRow.email} 
            phone={tableRow.phone}
            showInfoHandler={props.showInfoHandler.bind(this, index)} />;
    });

    return (
        <tbody>
            {tableRowsArray}
        </tbody>
    )
}

export default tableRows;