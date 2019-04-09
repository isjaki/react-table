import React from 'react';

import './Filter.css';

const filter = props => (
    <div className="Filter">
        <label>
            Поиск: <input type="text" onChange={props.dataToSearchHandler} />
        </label>
        <label>
            в столбце:
            <select onChange={props.columnToSearchHandler} name="searchColumn">
                <option value="id">Id</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>
        </label>
        <button onClick={props.findDataHandler}>Найти</button>
    </div>
);

export default filter;