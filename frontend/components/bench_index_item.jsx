import React from 'react';

const BenchIndexItem = (props) => {
    return(
        <div>
            <h1>{props.description}</h1>
            <h1>{props.lat}</h1>
            <h1>{props.lng}</h1>
        </div>
    )
}

export default BenchIndexItem;