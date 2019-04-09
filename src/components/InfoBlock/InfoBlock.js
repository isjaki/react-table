import React from 'react';

import './InfoBlock.css';

const infoBlock = props => {
    if (!props.address || !props.description) return null;

    return (
        <div className="InfoBlock">
            <div>Address:
                <div>Street: {props.address.streetAddress}</div>
                <div>City: {props.address.city}</div>
                <div>State: {props.address.state}</div>
                <div>Zip: {props.address.zip}</div>
            </div>
            <div>Description: {props.description}</div>
        </div>
    );
}

export default infoBlock;