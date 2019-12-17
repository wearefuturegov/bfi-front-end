import React from 'react'
import styled from 'styled-components';


const FilmPageMetaContainer = styled.div`

`
const BoldText = styled.span`
    font-weight: 600;
`

const FilmPageMeta = (props) => {  
    return (
        <FilmPageMetaContainer>
            <p>{props.location}, {props.year}</p>
            <p><BoldText>Director:</BoldText> {props.director}</p>
            <p><BoldText>Featuring:</BoldText> {props.featuring}</p>
        </FilmPageMetaContainer>
    )
}

export default FilmPageMeta
