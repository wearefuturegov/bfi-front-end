import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from './Heading.js';
import Button from './Button.js';
import TabBar from './TabBar.js';

import ExampleImg from '../../images/temp-imgs/example1.jpg';

const StyledFilmShowingsGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
`

const FilmShowingContainer = styled.div`
    width: 100%;
    
    @media ${vars.breakpoint.tablet} {
        width: 50%;
    }
    @media ${vars.breakpoint.desktop} {
        width: 33.33%;
    }
`

const FilmShowingsHighlight = styled.div`
    width: calc(100% - 30px);
    background: rgb(${vars.colour.pink});
    padding: 15px;

    h3 {
        margin-bottom: 15px;
    }
    h4 { 
        font-weight: 600;
        margin-bottom: 5px;
    }
    img {
        width: calc(100% + 30px);
        height: auto;
        margin-left: -15px;
        margin-top: -15px;
        margin-bottom: 10px;
    }
    p {
        max-width: 250px;
    }
`

const FilmShowingsBlock = styled.div`
    width: calc(100% - 30px);
    padding: 15px;
    padding-top: 0;
    h5 {
        margin-bottom: 15px;
        min-height: 49px;
    }
`

const FilmShowing = styled.div`
    margin-bottom: 15px;
    border-bottom: 1px solid rgb(${vars.colour.black});
    padding-bottom: 15px;
`

const FilmShowingTime = styled.button`
    margin-right: 10px;
    border: 2px solid rgb(${vars.colour.black});
    background: transparent;
    font-weight: 600;
    padding: 5px 10px;
    cursor: pointer;
`

export class FilmShowingsGrid extends Component {
    render() {
        return (
            <StyledFilmShowingsGrid>
                <TabBar options={[
                                    { title: "This week", active: true },
                                    { title: "BFI Picks", },
                                    { title: "Under 25" }
                                    ]} />
                <FilmShowingContainer>
                    <FilmShowingsHighlight>
                        <img src={ExampleImg} alt="" />
                        <Heading as="h4">Current Season</Heading>
                        <Heading as="h3" style="h1">MAURICE PIALAT</Heading>
                        <p>A two-part exploration of an uncompromising director and the impact he’s made on recent French cinema and its actors.</p>
                        
                        <Button colour={vars.colour.pink_dark} highlight={vars.colour.white}>Find out more</Button>
                    </FilmShowingsHighlight>
                </FilmShowingContainer>
                        
                <FilmShowingContainer>
                    <FilmShowingsBlock>
                        <FilmShowing>
                            <Heading as="h5">Tommy</Heading>
                            <FilmShowingTime>3:30pm</FilmShowingTime>
                            <FilmShowingTime>9:00pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">Judy &amp; Punch</Heading>
                            <FilmShowingTime>6:00pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">The House with Laughing Windows</Heading>
                            <FilmShowingTime>8:00pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">The General</Heading>
                            <FilmShowingTime>Sold out</FilmShowingTime>
                        </FilmShowing>
                    </FilmShowingsBlock> 
                </FilmShowingContainer> 

                <FilmShowingContainer>
                    <FilmShowingsBlock>
                        <FilmShowing>
                            <Heading as="h5">Eyes Wide Shut</Heading>
                            <FilmShowingTime>12:30pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">Singalong: La La Land</Heading>
                            <FilmShowingTime>3:00pm</FilmShowingTime>
                            <FilmShowingTime>8:30pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">The Sound of Music</Heading>
                            <FilmShowingTime>8:00pm</FilmShowingTime>
                        </FilmShowing>
                        <FilmShowing>
                            <Heading as="h5">Goodby, Mr. Chips</Heading>
                            <FilmShowingTime>5:00pm</FilmShowingTime>
                            <FilmShowingTime>10:00pm</FilmShowingTime>
                        </FilmShowing>
                    </FilmShowingsBlock>    
                </FilmShowingContainer>      
            </StyledFilmShowingsGrid>
        )
    }
}

export default FilmShowingsGrid
