import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Container from '../bfi-components/Container';

const PromoBar = ({NavInner, NavList, setnavHover}) => {

    const StyledPromoBar = styled.nav`
        background: ${vars.colour.pink};
        font-weight: 600;
        padding: 5px 0;
        ul {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            a {
                padding: 5px 20px;
                color: ${vars.colour.black};
            }
        }
    `

    return (
        <StyledPromoBar onMouseOver={() => setnavHover('')}>
            <Container noMargin={true}>
                <NavInner>
                    <NavList>
                        <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank" rel="noopener noreferrer">Buy tickets</a></li>
                        <li><a href="https://whatson.bfi.org.uk/Online/" target="_blank" rel="noopener noreferrer">BFI Player</a></li>
                        {/* <li><a href="https://shop.bfi.org.uk" target="_blank" rel="noopener noreferrer">Shop</a></li> */}
                        <li><Link to="/become-a-member">Become a member</Link></li>
                    </NavList>
                </NavInner>
            </Container>
        </StyledPromoBar>
    )
}

export default PromoBar;