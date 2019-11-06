import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav-styles.scss'
import Container from '../bfi-components/Container'

import WatchSub from './WatchSub'
import ExploreSub from './ExploreSub'
import MakeSub from './MakeSub'
import EducationSub from './EducationSub'
import AboutSub from './AboutSub'
import SupportSub from './SupportSub'

const Nav = ({currentHome}) => {
    function subNav() {
        switch(currentHome) {
            case "watch":
                return <WatchSub />;
            case "explore":
                return <ExploreSub />;
            case "make":
                return <MakeSub />;
            case "education":
                return <EducationSub />;
            case "about-us":
                return <AboutSub />;
            case "support-and-join":
                return <SupportSub />;
            default:
                return null;
        }
    }

    return (
        <header>
            <nav className="top-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li className="top-nav_watch"><Link to="/">Watch</Link></li>
                            <li className="top-nav_explore"><Link to="/explore">Explore</Link></li>
                            <li className="top-nav_make"><Link to="/make">Make</Link></li>
                            <li className="top-nav_education"><Link to="/education">Education</Link></li>
                            <li className="top-nav_about-us"><Link to="/about-us">About Us</Link></li>
                            <li className="top-nav_support-and-join"><Link to="/support-and-join">Support &amp; Join</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
            <nav className="mid-nav">
                <Container>
                    <div className="inner">
                        <div className="header_brand">logo</div>
                        <ul>
                            <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank">Buy tickets</a></li>
                            <li><a href="https://shop.bfi.org.uk" target="_blank">Shop</a></li>
                            <li><a href="https://whatson.bfi.org.uk/Online/login.asp?targetPage=maintainAccount.asp" target="_blank">Log in</a></li>
                            <li><a href="https://www.bfi.org.uk/search/search-bfi/I'm%20looking%20for..." target="_blank">Search</a></li>
                        </ul>
                    </div>
                </Container>
            </nav>
            { subNav() } 
        </header>
    )
}

export default Nav
