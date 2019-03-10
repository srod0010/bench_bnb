import React from 'react';

const BenchIndexItem = (props) => {
    // debugger;
    return(
        <ul>
            <li>{props.description}</li>
            <li>{props.lat}</li>
            <li>{props.lng}</li>
        </ul>
    )
}

export default BenchIndexItem;