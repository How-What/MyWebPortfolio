import React from 'react'
import {Link} from 'react-router-dom';

function NavbarComponents() {
    return (
        <>
            <nav>
                <Link to="/">
                    Logo
                </Link>
                <Link to='/timeuntil'> Time Until </Link>
                {/* <a href='https://www.github.com' target="_blank" rel="noreferrer">Git Hub</a> */}
            </nav>
        </>
    )
}

export default NavbarComponents
