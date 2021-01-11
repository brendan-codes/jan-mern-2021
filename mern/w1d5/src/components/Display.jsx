import React from 'react';


const Display = ({tabs, selected}) => {

    return (
        <div>
            {
                tabs[selected].content
            }
        </div>
    )
}

export default Display;