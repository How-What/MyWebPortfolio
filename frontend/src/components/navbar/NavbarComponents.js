import React from 'react'
import {Link} from 'react-router-dom';

function NavbarComponents() {
    return (
        <>
            <nav>
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
                <Link to='/tweets'> Tweets </Link>
                <Link to='/github'>Git Hub</Link>
            </nav>
        </>
    )
}

export default NavbarComponents
