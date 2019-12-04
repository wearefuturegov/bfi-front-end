import React from 'react'
import styled from 'styled-components';
import * as vars from '../../../variables.js';


const FilmPageMetaContainer = styled.div`

`
const BoldText = styled.span`
    font-weight: 600;
`

const FilmPageMeta = (props) => {  
    return (
        <FilmPageMetaContainer>
            <p><BoldText>Director:</BoldText> {props.director}</p>
            <p><BoldText>Year released:</BoldText> {props.year}</p>
            <p><BoldText>Featuring:</BoldText> {props.featuring}</p>
        </FilmPageMetaContainer>
    )
}

export default FilmPageMeta
