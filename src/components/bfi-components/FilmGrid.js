import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import FilmCard, { FilmCardSkeleton } from './FilmCard';

const StyledFilmGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
`

const FilmGrid = () => {
    const [isLoaded, setisLoaded] = useState(false);
    const [filmHighlights, setfilmHighlights] = useState();
    const [hasError, setErrors] =  useState(false);

    useEffect(() => {
        fetchData("https://films-tv-people.explore.bfi.digital/api/works/highlights", setfilmHighlights, setisLoaded, setErrors)
    }, []);

    return (
        <StyledFilmGrid>
            { hasError && 
                <p>Sorry there was an error, please try refreshing.</p>
            }
            { isLoaded ? (
                filmHighlights &&
                    filmHighlights.map((film) =>
                        <FilmCard 
                            key={film.uuid}
                            uuid={film.uuid}
                            title={film.display_title}
                            subInfo=""
                            image={film.images ? film.images[0].url : ""}
                            onPlayer={film.watch ? (film.watch.bfi_player ? true : false) : false}
                            onSouthbank={film.watch ?  (film.watch.bfi_southbank ? true : false) : false}
                        />
                    )
            ) : (
                <>
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                <FilmCardSkeleton />
                </>
            )}
        </StyledFilmGrid>
    )
}

export default FilmGrid;

export const fetchData = async (API, storeData, setisLoaded, setErrors) => {
    setisLoaded(false);
    const res = await fetch(API, {mode: 'cors'});
    res
        .json()
        .then(res => storeData(res.data), setisLoaded(true))
        .catch(err => setErrors(err));
}