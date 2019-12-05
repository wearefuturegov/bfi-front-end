import React, { Component } from 'react'
import styled from 'styled-components';
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
                    uuid="ccc481e1-f1c2-5b60-bbe7-77ad5645fb1a"
                    title="Singin’ in the Rain"
                    subInfo="Mon 2 Dec"
                    onPlayer="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    onSouthbank=""
                    image="https://player.bfi.org.uk/sites/default/files/styles/landscape_1200x675/public/hero-images/singin-in-the-rain.jpeg"
                />
                <FilmCard 
                    uuid="f2142b94-8e66-581d-88d3-d7e2fc5a2f17" 
                    title="Test" 
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard 
                    uuid="c4de98c5-d1af-5671-a66f-6d2dd6ebf999"
                    title="Singin’ in the Rain 2; electric bugaloo" 
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard 
                    title="The Test" 
                    uuid="964d122a-13a9-50c6-ba7b-efe146a230b6"
                />
                <FilmCard 
                    uuid="06347a64-5abd-59de-a6b9-be0d4a9e31e"
                    title="West Side Story"
                    subInfo="Newly added"
                    onPlayer="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    onSouthbank="https://player.bfi.org.uk/rentals/film/watch-singin-in-the-rain-1951-online"
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard />       
                <FilmCard 
                    uuid="5f768a0b-ac36-55b2-a97b-2c67c0ee1520"
                    subInfo="Family friendly classic" 
                    title="I Killed My Lesbian Wife, Hung Her on a Meathook, and Now I Have a Three Picture Deal at Disney" 
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard 
                    uuid="0040ab0f-ef0f-5c46-b34a-b3d875824a89"
                    title="The Lord of the Rings: The Return of the King" 
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />
                <FilmCard 
                    uuid="7f1cb21f-ac8f-5426-8cd0-583260e90213"
                    title="Crouching Tiger, Hidden Dragon: Sword of Destiny" 
                    image={"https://www.fillmurray.com/" + ((800) + Math.floor(Math.random() * Math.floor(10)) + "/" + (450 + Math.floor(Math.random() * Math.floor(10))))}
                />         
            </StyledFilmGrid>
        )
    }
}

export default FilmGrid
