import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Container from '../../bfi-components/Container'
import { Heading, HeadingBuffer } from '../../bfi-components/Heading'
import FilmPageMeta from './FilmPageMeta'


const FilmPage = () => {
    const [filmData, setfilmData] = useState({
        "uuid": "ccc481e1-f1c2-5b60-bbe7-77ad5645fb1a",
        "priref": 150028636,
        "type": "film",
        "title": "Godfather",
        "title_article": "The",
        "display_title": "The Godfather",
        "year": "1972",
        "summary_credits": {
            "production_countries": "USA",
            "directed_by": "Francis Ford Coppola",
            "featuring": "Marlon Brando, Al Pacino, James Caan"
        },
        "articles": []
    });
    const [loading, setLoading] = useState(true);
    const [hasError, setErrors] =  useState(false);

    useEffect(() => {
        // fetchData("https://films-tv-people.explore.bfi.digital/api/films/", window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1), setfilmData, setLoading, setErrors)
    }, []);
    return (
        <Container>
            <HeadingBuffer />
            { loading === false && filmData ? (
                <p>Loading...</p>
            ) : (
                <>
                <Heading as="h1">{filmData.display_title}</Heading>
                <Heading as="h4">Short description ({filmData.year})</Heading>
                <p>Image goes here</p>

                <FilmPageMeta director={filmData.summary_credits.directed_by} year={filmData.year} featuring={filmData.summary_credits.featuring} />
                </>
            )}
            { hasError && 
				<p>Sorry there was an error fetching the film data, please try refreshing the page.</p>
			}
        </Container>
    )
}

export default FilmPage;

export const fetchData = async (API, filmID, storeData, setLoading, setErrors) => {
    setLoading(true);
    const res = await fetch(API + filmID, {mode: 'cors'});
    res
        .json()
        .then(res => storeData(res.data), setLoading(false))
        .catch(err => setErrors(err));
}