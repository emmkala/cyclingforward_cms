import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import navLogo from '../images/FinalLogo_White.png'

function TopNav(props) {
    const [navStyle, setNavStyle] = useState(props.navtype)

    if (navStyle == "changing-nav") {

    }
    const listenScrollEvent = (event) => {
        if (navStyle == "changing-nav") {
            if (window.scrollY < 73) {
                return setNavStyle("changing-nav")
            } else if (window.scrollY > 70) {
                return setNavStyle("solid-nav")
            }
        }   
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);


    return (
        <div className={"nav-bar " + navStyle}>
            <div className="left-nav">
                <NavLink to="/" className="nav-link nav-btn-logo">
                    <img className="nav-img" src={navLogo} />Cycling Forward
                </NavLink>
            </div>
            <div className="right-nav">
                <NavLink to="/resources" className="nav-link" id="nav-login">Resources</NavLink>
                <NavLink to="/shop" className="nav-link inactive">Shop</NavLink>
                <NavLink to="/request" className="nav-link">Request</NavLink>
                <NavLink to="/donate" className="nav-link btn nav-btn">Donate</NavLink>
            </div>
        </div>
    )
}

export default TopNav