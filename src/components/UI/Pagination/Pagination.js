import React from 'react';

import './Pagination.css';

const pagination = props => {
    return (
        <div className="Pagination">
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