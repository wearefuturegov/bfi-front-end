import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Container from '../bfi-components/Container';

const PromoBar = ({NavInner, NavList, setnavHover}) => {

    const StyledPromoBar = styled.nav`
        background: rgb(${vars.colour.pink});
        font-weight: 600;
        padding: 5px 0;

        ul {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            li {
                width: 33%;
            }
            a {
                padding: 3px 10px;
                text-align: center;
                color: rgb(${vars.colour.black});
            }
        }
        @media ${vars.breakpoint.tablet} {
            ul {
                li {
                    width: auto;
                }
                a {
                    padding: 5px 20px;
                    text-align: left;
                }
            }
        }
    `

    return (
        <StyledPromoBar onMouseOver={() => setnavHover('')}>
            <Container margin="none">
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