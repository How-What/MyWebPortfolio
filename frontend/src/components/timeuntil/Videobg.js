import React from 'react'
import ForeWorksbg from './assests/fireworksbg.mp4'

function Videobg({holiday}) {

    const switchbg = (holiday) =>{
        switch (holiday){
            case 'New Years':
                return ForeWorksbg;
            default:
                
        }
    }

    return (
        <>
             <video autoPlay loop muted className='videobg'>
                <source src={switchbg(holiday)} type='video/mp4' />
            </video>
        </>
    )
}

export default Videobg
