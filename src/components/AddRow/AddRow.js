import React from 'react';

import './AddRow.css';

const addRow = props => {
    let addRowForm = null;

    const showAddRowButton = props.newRowData.id && props.newRowData.firstName &&
        props.newRowData.lastName && props.newRowData.email && props.newRowData.phone

    if (props.showAddRowForm) {
        addRowForm = (
            <form>
                <input 
                    type='number' 
                    name="id"
                    placeholder="Id" 
                    onChange={props.inputChangeHandler} 
                />
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    onChange={props.inputChangeHandler}
                />
                <input
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    onChange={props.inputChangeHandler}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={props.inputChangeHandler}
                />
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone Number"
                    onChange={props.inputChangeHandler}
                />
                {
                    showAddRowButton ? 
                    <button onClick={props.addRowHandler}>Добавить в таблицу</button>
                    : null
                }
                
            </form>
        );
    }

    return (
        <div className="AddRow">
            <button onClick={props.showFormHandler}>Добавить</button>
            {addRowForm}
        </div>
    );
}

export default addRow;