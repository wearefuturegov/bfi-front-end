import React, { useState, useEffect } from 'react';

import Container from '../../bfi-components/Container'
import { Heading, HeadingBuffer } from '../../bfi-components/Heading'
import FilmPageMeta from './FilmPageMeta'
import ArticleSummary from '../../bfi-components/ArticleSummary'
import ArticleGrid from '../../bfi-components/ArticleGrid';


const FilmPage = () => {
    const [filmData, setfilmData] = useState({ summary_credits: [], articles: [] });
    const [loading, setLoading] = useState(true);
    const [hasError, setErrors] =  useState(false);

    useEffect(() => {
        fetchData("https://films-tv-people.explore.bfi.digital/api/films/", window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1), setfilmData, setLoading, setErrors)
    }, []);

    return (
        <>
            <HeadingBuffer />
            { loading === true ? (
                <Container>
                    <p>Loading...</p>
                </Container>
            ) : (
                <>
                <Container>
                    <Heading as="h1">{filmData.display_title}</Heading>
                    <Heading as="h4">Short description ({filmData.year})</Heading>
                    <p>Image goes here</p>

                    <FilmPageMeta director={filmData.summary_credits.directed_by} year={filmData.year} featuring={filmData.summary_credits.featuring} />
                </Container>

                <Container>
                    <Heading as="h2">Read more about {filmData.display_title}</Heading>
                    <ArticleGrid>
                        {filmData.articles.map((article, key) =>
                            <ArticleSummary 
                                key={key}
                                link={article.url} 
                                title={article.title} 
                                image={article.primary_image.filter((e) => e.size === "full_4x3")[0].url} 
                            />
                        )}
                    </ArticleGrid>
                </Container>
                </>
            )}
            { hasError && 
				<p>Sorry there was an error fetching the film data, please try refreshing the page.</p>
			}
        </>
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