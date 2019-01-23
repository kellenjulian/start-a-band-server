import React from 'react';

import './Navbar.css';
import titlePic from './../../assets/Shure_mikrofon_55S.jpg';
import Logout from './Logout/Logout';

const Navbar = (props) => {
    return(
        <nav>
            <img src={titlePic} alt="Title" />
            <Logout logout={props.logout} />
        </nav>
    )
}

export default Navbar;