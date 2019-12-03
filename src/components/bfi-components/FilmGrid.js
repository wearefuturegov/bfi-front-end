import React, { Component } from 'react'
import styled from 'styled-components';
import * as vars from '../../variables.js';
import FilmCard from './FilmCard';

const StyledFilmGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
`

export class FilmGrid extends Component {
    render() {
        return (
            <StyledFilmGrid>
                <FilmCard 
                    uuid="4ce2b6b6036b6"
                    title="Singin’ in the Rain"
                    subInfo="Mon 2 Dec"
                    onPlayer="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    onSouthbank=""
                    image="https://player.bfi.org.uk/sites/default/files/styles/landscape_1200x675/public/hero-images/singin-in-the-rain.jpeg"
                />
                <FilmCard image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}/>
                <FilmCard image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}/>
                <FilmCard />
                <FilmCard 
                    uuid="4ce2b6b6036b6"
                    title="Test of a really longer title of a film"
                    subInfo="Newly added"
                    onPlayer="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    onSouthbank="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard />                
            </StyledFilmGrid>
        )
    }
}

export default FilmGrid
