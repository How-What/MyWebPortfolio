import React from 'react';
import {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import Clock from './Clock';

function TimeUntil() {
    const [date, setdate] = useState(new Date());
    const [showclock, setshowclock] = useState(false);
    const [holiday, setholiday] = useState('');

    //CountDown logic
    const xmas_date = new Date("December 25, 2021").getTime();
    const today_date = new Date().getTime()
    let dist = xmas_date - today_date
    
    let days = Math.floor( dist / (1000 * 60 *60 *24))
    let hours = Math.floor( dist % (1000 * 60 *60 *24) / (1000 * 60 * 60))
    let minutes = Math.floor( dist % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor( dist % (1000 * 60) / (1000))

    function pad (num) {
        return ('0' + num).slice(-2)
    }

    console.log(`${days} days ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)

    //Thanks giving logic
    let year = new Date();
    year.setFullYear(2022)
    let first = new Date("November 1, " +year.getUTCFullYear())
    let day_of_week = first.getDay()
    console.log(year.toString())
    console.log(22 + (11 - day_of_week) % 7)

    const clock = holiday =>{
        setholiday(holiday);
        setshowclock(!showclock);
    }

    return (
        <div className="timeUntil">
            <div className="holidaySelection">
                <div onClick={() => clock('New Years')}>
                    <p>New Years</p>
                </div>
                <div>
                    <p>Christmas</p>
                </div>
                <div>
                    <p>Thanksgiving</p>
                </div>
                <div>
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
