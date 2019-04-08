import React from 'react';

const tableRow = props => (
        <tr onClick={props.showInfoHandler}>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
);

export default tableRow;