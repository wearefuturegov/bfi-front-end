import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import Container from '../../bfi-components/Container';
import Heading from '../../bfi-components/Heading';
import IntroText from '../../bfi-components/IntroText';

import FilmPageMeta from './FilmPageMeta';
import ArticleSummary from '../../bfi-components/ArticleSummary';
import ArticleGrid from '../../bfi-components/ArticleGrid';

import FilmHero from '../../bfi-components/FilmHero';

const FilmPage = () => {
    const [filmData, setfilmData] = useState({ summary_credits: [], articles: [] });
    const [loading, setLoading] = useState(true);
    const [hasError, setErrors] =  useState(false);

    useEffect(() => {
        fetchData("https://films-tv-people.explore.bfi.digital/api/films/", window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1), setfilmData, setLoading, setErrors)
    }, []);

    return (
        <>
            { loading === true ? (
                <Container>
                    <p>Loading...</p>
                </Container>
            ) : (
                <>
                <FilmHero title={filmData.display_title} image={filmData.images} />
                <Container margin="small" withSidebar sidebarSide="left">
                    <section>
                        <IntroText>{filmData.description}</IntroText>
                    </section>
                    <section>
                        <FilmPageMeta director={filmData.summary_credits.directed_by} location={filmData.summary_credits.production_countries} year={filmData.year} featuring={filmData.summary_credits.featuring} />
                    </section>        
                </Container>

                <Container>
                    {filmData.watch &&
                        filmData.watch.bfi_player ? (
                            <p><a href={filmData.watch.bfi_player[0].url} target="_blank" title="Watch on BFI Player">Watch on BFI Player</a></p>
                        ) : (
                            <p>Not avaliable on BFI Player</p>
                        )
                    }
                    {filmData.watch &&
                        filmData.watch.bfi_southbank ? (
                            <>
                                <p><a href={filmData.watch.bfi_southbank[0].additional_info_url} target="_blank" title="Find out more">View on Southbank</a></p>
                                {filmData.watch.bfi_southbank.map((showing) =>
                                    <p key={showing.performance_id}><a href={showing.booking_url} target="_blank" title="Book this showing"><Moment>{showing.datetime}</Moment></a></p>
                                )}
                            </>
                        ) : (
                            <p>Not showing at Southbank</p>
                        )
                    }
                </Container>

                { filmData.articles &&
                    filmData.articles.length > 0 &&
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
                }
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