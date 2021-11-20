import React from 'react'
import {useState, useEffect} from 'react';
import holidaylist from './holiday';

function Clock({holiday}) {
    const [date, setdate] = useState(new Date())

    useEffect(() => {
        let timerid = setInterval( () => tick(), 1000)
        return () => {
            clearInterval(timerid)
        }
    }, [date])

    const tick = () =>{
        setdate(new Date())
    }

    //helper as defined by the holidayjs
    const stringedHoliday = (holiday) => {
        switch(holiday){
            case 'New Years':
                return holidaylist.newYear;
            case 'Christmas':
                return holidaylist.christmas;
            case 'Thanksgiving':
                return holidaylist.thanksgving;
            case 'Halloween':
                return holidaylist.halloween;
            default:
                return '';
        }
    }
    
    //helper to build out the timer
    const timeleftString = (days, hours, minutes, seconds) => {
        return(<>
                <div id = "day">
                    <span>{days}</span>
                    <span>{days === 1? 'Day': 'Days'}</span>
                </div>
                <div id = "hour">
                    <span>{hours}</span>
                    <span>{hours === 1? 'Hour': 'Hours'}</span>
                </div>
                <div id = "minute">
                    <span>{minutes}</span>
                    <span>{minutes === 1? 'Minute': 'Minutes'}</span>
                </div>
                <div id = "seconds">
                    <span>{seconds}</span>
                    <span>{seconds === 1? 'Second': 'Seconds'}</span>
                </div>
            </>)
    }

    //main function for the math of countdown
    const getTimeLeft = (holiday) =>{
        const holidate = new Date(stringedHoliday(holiday)).getTime();
        const today_date = date
        let dist = holidate - today_date
        
        let days = Math.floor( dist / (1000 * 60 *60 *24))
        let hours = Math.floor( dist % (1000 * 60 *60 *24) / (1000 * 60 * 60))
        let minutes = Math.floor( dist % (1000 * 60 * 60) / (1000 * 60))
        let seconds = Math.floor( dist % (1000 * 60) / (1000))

        return timeleftString(days, hours, minutes, seconds);
    }

    //orginally needed when I wanted to pad the signle digets with a zero kept for refrence
    // const pad = (num) => {
    //     return ('0' + num).slice(-2)
    // }

    return (
        <>
            <div className='countdown_box'>
                <span>{holiday}</span>
                <div id='countdown' className='countdown'>
                    {getTimeLeft(holiday)}
                </div>
            </div>
        </>
    )
}

export default Clock
