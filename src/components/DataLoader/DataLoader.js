import React from 'react';

import './DataLoader.css';

const dataLoader = props => (
    <div className="DataLoader">
        Выберете набор данных:
        <select onChange={props.selectDataSizeHandler} name="options">
            <option value="small">Маленький</option>
            <option value="large">Большой</option>
        </select>
        <button onClick={props.getDataHandler}>Загрузить данные</button>
    </div>
);

export default dataLoader;