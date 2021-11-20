import React from 'react';
import {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import Clock from './Clock';
import holidaylist from './holiday';

function TimeUntil() {
    const [showclock, setshowclock] = useState(false);
    const [holiday, setholiday] = useState('');

    const clock = holidayDay =>{
        if (holiday !== holidayDay){
            setshowclock(true)
        }else{
            setshowclock(!showclock);
        }
        setholiday(holidayDay);
    }

    return (
        <div className="timeUntil">
            <div className="holidaySelection">
                <div onClick={() => clock('New Years')}>
                    <p>New Years</p>
                </div>
                <div onClick={() => clock('Christmas')}>
                    <p>Christmas</p>
                </div>
                <div onClick={() => clock('Thanksgiving')}>
                    <p>Thanksgiving</p>
                </div>
                <div onClick={() => clock('Halloween')}>
                    <p>Halloween</p>
                </div>
            </div>
            
            <div id="countdown_container" className = 'countdown_container'>
                {
                    showclock? <Clock holiday={holiday}/> : null
                }
            </div>                  
        </div>
    )
}

export default TimeUntil
