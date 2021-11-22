import React from 'react';
import {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import Clock from './Clock';
import holidaylist from './holiday';
import ForeWorksbg from './assests/fireworksbg.mp4'
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
        if (!showclock){
            console.log(showclock)
            document.getElementById('countdown_container').style.backgroundColor = "rgba(255,255,255, .3)"
        }else{
            console.log(showclock)
            document.getElementById('countdown_container').style.backgroundColor = "rgba(255,255,255, 0)"
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
