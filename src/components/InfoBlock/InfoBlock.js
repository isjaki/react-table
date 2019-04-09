import React from 'react';

import './InfoBlock.css';

const infoBlock = props => {
    if (!props.infoToDisplay.address || !props.infoToDisplay.description) {
        return (
            <div className="InfoBlock">
                Выбран пользователь: <b>{props.infoToDisplay.firstName + ' '
                + props.infoToDisplay.lastName}</b>
            </div>
        );
    };

    return (
        <div className="InfoBlock">
            <div>
                Выбран пользователь: <b>{props.infoToDisplay.firstName + ' '
                + props.infoToDisplay.lastName}</b>
            </div>
            <div>
                Описание:
                <br /><textarea
                    value={props.infoToDisplay.description}
                    readOnly
                ></textarea>
            </div>
            <div>
                Адрес проживания: <b>{props.infoToDisplay.address.streetAddress}</b>
            </div>
            <div>
                Город: <b>{props.infoToDisplay.address.city}</b>
            </div>
            <div>
                Провинция/Штат: <b>{props.infoToDisplay.address.state}</b>
            </div>
            <div>
                Индекс: <b>{props.infoToDisplay.address.zip}</b>
            </div>
        </div>
    );
}

export default infoBlock;