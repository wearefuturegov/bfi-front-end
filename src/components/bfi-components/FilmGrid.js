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
                    uuid="33de2949-3ce8-5f0b-920a-311784964aec"
                    title="Singin’ in the Rain"
                    subInfo="Classic on the big screen"
                    image="https://player.bfi.org.uk/sites/default/files/styles/landscape_1200x675/public/hero-images/singin-in-the-rain.jpeg"
                    onPlayer={true}
                    onSouthbank={false}                
                />
                <FilmCard 
                    uuid="f2142b94-8e66-581d-88d3-d7e2fc5a2f17" 
                    title="The Wizard Of Oz" 
                    image="https://whatson.bfi.org.uk/ArticleMedia/Images/WhatsOn%20images/March%202013/wizard-of-oz-1925-01.jpg"
                    onPlayer={true}
                    onSouthbank={false}
                />
                <FilmCard 
                    uuid="c4de98c5-d1af-5671-a66f-6d2dd6ebf999"
                    title="Chitty Chitty Bang Bang" 
                    image="https://whatson.bfi.org.uk/ArticleMedia/Images/WhatsOn%20images/201912/chitty-chitty-bang-bang-01.jpg"
                    onPlayer={false}
                    onSouthbank={false}
                />
                <FilmCard 
                    title="Calamity Jane" 
                    uuid="964d122a-13a9-50c6-ba7b-efe146a230b6"
                    image="https://whatson.bfi.org.uk/ArticleMedia/Images/WhatsOn%20images/201912/calamity-jane-01.jpg"
                    onPlayer={true}
                    onSouthbank={false}
                />
                <FilmCard 
                    uuid="06347a64-5abd-59de-a6b9-be0d4a9e31e1"
                    title="West Side Story"
                    subInfo="Newly added"
                    image="https://whatson.bfi.org.uk/ArticleMedia/Images/WhatsOn%20images/201912/west-side-story-01.jpg"
                    onPlayer={false}
                    onSouthbank={true}
                />
                <FilmCard 
                    uuid="131df8c9-f283-5c2a-aa1c-1c7a7eba2605"
                    title="Show Boat" 
                    image="http://films-tv-people.explore.bfi.digital/works/131df8c9-f283-5c2a-aa1c-1c7a7eba2605/image"
                    onPlayer={true}
                    onSouthbank={true}
                />       
                <FilmCard 
                    uuid="5f768a0b-ac36-55b2-a97b-2c67c0ee1520"
                    subInfo="Family friendly classic" 
                    title="This is an example of a really long title, not many film titles will be this long, but good to be safe." 
                    image="http://films-tv-people.explore.bfi.digital/works/5f768a0b-ac36-55b2-a97b-2c67c0ee1520/image"
                    onPlayer={false}
                    onSouthbank={false}
                />
                <FilmCard 
                    uuid="0040ab0f-ef0f-5c46-b34a-b3d875824a89"
                    title="White Christmas" 
                    image="http://films-tv-people.explore.bfi.digital/works/0040ab0f-ef0f-5c46-b34a-b3d875824a89/image"
                    onPlayer={false}
                    onSouthbank={false}
                />
                <FilmCard 
                    uuid="7f1cb21f-ac8f-5426-8cd0-583260e90213"
                    title="Fiddler On The Roof" 
                    image="http://films-tv-people.explore.bfi.digital/works/7f1cb21f-ac8f-5426-8cd0-583260e90213/image"
                    onPlayer={false}
                    onSouthbank={false}
                />         
            </StyledFilmGrid>
        )
    }
}

export default FilmGrid
