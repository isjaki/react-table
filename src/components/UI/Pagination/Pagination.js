import React from 'react';

const pagination = props => {
    return (
        <div>
            <button
                onClick={props.toPreviousPageHandler}
            >Previous</button>
            <span>{props.currentPage} from {props.numberOfPages}</span>
            <button
                onClick={props.toNextPageHandler}
            >Next</button>
        </div>
    );
}

export default pagination;