import React from 'react';

const scroll = (props) => {
    return (
        <div style={{overflowY:'scroll' ,height:'496px'}}>
            {props.children}
        </div>
    );
};

export default scroll;