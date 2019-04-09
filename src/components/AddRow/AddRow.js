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
                    value={props.newRowData.id}
                    onChange={props.inputChangeHandler} 
                />
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    value={props.newRowData.firstName}
                    onChange={props.inputChangeHandler}
                />
                <input
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    value={props.newRowData.lastName}
                    onChange={props.inputChangeHandler}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={props.newRowData.email}
                    onChange={props.inputChangeHandler}
                />
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone Number"
                    value={props.newRowData.phone}
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