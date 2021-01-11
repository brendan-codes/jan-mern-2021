import React, {useState} from 'react';
import Display from './Display';


const Tabs = (props) => {

    const {tabs, tabHandler, selected} = props;


    return (
        <div>
            {
                tabs.map((val, idx) =>
                    <button key={idx} onClick={e => tabHandler(idx)}>{val.title} and my index is {idx}</button>
                )
            }
            <Display
                tabs={tabs}
                selected={selected}
            />
        </div>
    )
}

export default Tabs;