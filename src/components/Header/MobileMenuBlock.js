import React, {useState} from 'react';
import styled from 'styled-components';
import * as vars from '../../variables.js';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

import SlideToggleContent from '../bfi-components/SlideToggleContent';

const MobileMenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 15px 0px;
    margin: 0 15px;
    width: calc(100% - 30px);
    text-align: left;
`

const MobileMenuList = styled.ul`
    padding: 0 15px;
    padding-bottom: 15px;
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    // display: none;

    li {
        &:first-child {
            margin-top: 15px;
        }
    }
    a {
        padding: 5px 0;
        display: block;
        color: rgb(${vars.colour.black});
    }
`

const Break = styled.hr`
    width: calc(100% - 30px);
    border: 0;
    height: 1px;
    background: rgb(${vars.colour.grey});
`



const MobileMenuBlock = ({subMenuName, SubNavItems}) => {
    const [mobileSubMenuOpen, setmobileSubMenuOpen] = useState(false);

    function handleMobileSubMenuClick() {
        if(mobileSubMenuOpen) {
            setmobileSubMenuOpen(false);
        } else {
            setmobileSubMenuOpen(true);
        }
    }

    return (
        <>
            <MobileMenuButton onClick={handleMobileSubMenuClick}>
                <span>{subMenuName}</span> 
            </MobileMenuButton>
            <SlideToggleContent isVisible={mobileSubMenuOpen} key={subMenuName}>
                <MobileMenuList>
                    <Link to={"/"+slugify(subMenuName)}>{subMenuName} Home</Link>
                    { SubNavItems.map((link) => (
                        <li key={ link.id }><Link to={link.url}>{link.title}</Link></li>
                    )) }
                </MobileMenuList>
            </SlideToggleContent>
            { subMenuName !== 'Support & Join' ? 
                <Break />    
            :null }
        </>
    )
}

export default MobileMenuBlock
