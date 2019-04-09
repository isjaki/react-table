import React from 'react';

import './Filter.css';

const filter = props => (
    <div>
        <label>
            Поиск: <input type="text" onChange={props.dataToSearchHandler} />
        </label>
        <button onClick={props.findDataHandler}>Найти</button>
    </div>
);

export default filter;