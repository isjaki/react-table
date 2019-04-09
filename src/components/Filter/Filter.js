import React from 'react';

import './Filter.css';

const filter = props => (
    <div>
        <label>
            Поиск: <input type="text" onChange={props.dataToSearchHandler} />
        </label>
        <label>
            в столбце:
            <select onChange={props.columnToSearchHandler} name="searchColumn">
                <option value="id">id</option>
                <option value="firstName">first name</option>
                <option value="lastName">last name</option>
                <option value="email">email</option>
                <option value="phone">phone</option>
            </select>
        </label>
        <button onClick={props.findDataHandler}>Найти</button>
    </div>
);

export default filter;