import React from 'react';
import {useState} from 'react';
import Clock from './Clock';
import Videobg from './Videobg';

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

    const toggleAlpha = () =>{
        return showclock? 'rgba(255,255,255,.5)' : 'rgba(255,255,255,0)';
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
            <div id="countdown_container" className = 'countdown_container' style={{backgroundColor: toggleAlpha()}}>
                {
                    showclock? <Videobg holiday={holiday}/> : null
                }
                {
                    showclock? <Clock holiday={holiday}/> : null
                }
            </div>                  
        </div>
    )
}

export default TimeUntil
