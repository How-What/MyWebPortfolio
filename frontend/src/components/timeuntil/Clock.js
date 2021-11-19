import React from 'react'
import {useState, useEffect} from 'react';

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

    return (
        <>
            <div className='countdown_box'>
                <span>{holiday}</span>
                <div id='countdown' className='countdown'>
                    {date.toLocaleTimeString()}
                </div>
            </div>
        </>
    )
}

export default Clock
