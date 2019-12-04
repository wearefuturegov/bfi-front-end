import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import Heading from './Heading.js';
import TabBar from './TabBar.js';

const StyledFilmShowingsGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
`

const FilmShowingsHighlight = styled.div`
    width: 33.33%;
    background: ${vars.colour.pink};

    h3 {
        text-align: center;
    }
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
                <FilmShowingsHighlight>
                    <Heading as="h3">Today</Heading>
                </FilmShowingsHighlight>           
            </StyledFilmShowingsGrid>
        )
    }
}

export default FilmShowingsGrid
