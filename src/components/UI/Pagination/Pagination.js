import React from 'react';

const pagination = props => {
    return (
        <div>
            <button>Previous</button>
            <span>{props.currentPage} from {props.numberOfPages}</span>
            <button>Next</button>
        </div>
    );
}

export default pagination;