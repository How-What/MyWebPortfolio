import React from 'react'
import ForeWorksbg from './assets/fireworksbg.mp4'
import ThanksG from './assets/thanksgivingbg.mp4'
import Xmasbg from './assets/christmasbg.mp4'
import Halloweenbg from './assets/halloweenbg.mp4'

function Videobg({holiday}) {

    const switchbg = (holiday) =>{
        switch (holiday){
            case 'New Years':
                return ForeWorksbg;
            case 'Thanksgiving':
                return ThanksG;
            case 'Christmas':
                return Xmasbg;
            case 'Halloween':
                return Halloweenbg;
            default:
                return '';
        }
    }

    return (
        <>
            <video key={switchbg(holiday)} autoPlay loop muted className='videobg'>
                <source src={switchbg(holiday)} type='video/mp4' />
            </video>
        </>
    )
}

export default Videobg
