import React from 'react';

const ChirpItem = (props) => {
    return (
        <div>
            <li className="list-group-item"> 
                {props.chirp.task}
            </li>
        </div>
    )
}

export default ChirpItem;