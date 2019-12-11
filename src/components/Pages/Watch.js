import React, { useState, useEffect } from 'react';

import Container from '../bfi-components/Container';
import Heading from '../bfi-components/Heading';
import Skeleton from '../bfi-components/Skeleton';
import FilmGrid from '../bfi-components/FilmGrid';
import FilmShowingsGrid from '../bfi-components/FilmShowingsGrid';
import HomeBanner from '../bfi-components/HomeBanner'
import BFIPlayerBanner from "./watch/BFIPlayerBanner/BFIPlayerBanner";
import SouthBankBanner from "./watch/SouthBankBanner/SouthBankBanner";

import WatchBannerImg from '../../images/home-banners/watch-banner.jpg';

const Watch = () => {
    const [isLoaded, setisLoaded] = useState(false);
    const [filmHighlights, setfilmHighlights] = useState();
    const [hasError, setErrors] =  useState(false);

    useEffect(() => {
        fetchData("https://films-tv-people.explore.bfi.digital/api/works/highlights", setfilmHighlights, setisLoaded, setErrors)
    }, []);

    return (
        isLoaded ? 
        <> 
            <HomeBanner title="Watch a new film, rediscover your old favourites, and get inspired." image={WatchBannerImg} />
            
            {/* <Container>
                <Heading as="h2">Now on Southbank</Heading>
                <FilmShowingsGrid />
            </Container> */}

            { filmHighlights && 
                <Container>
                    <Heading as="h2">Watch with us</Heading>
                    <FilmGrid filmHighlights={filmHighlights} />
                </Container>
            }

            <Container>
                <Heading as="h2">Watch at home</Heading>
                <BFIPlayerBanner />
            </Container>

            <Container>
                <Heading as="h2">Visit BFI Southbank</Heading>
                <SouthBankBanner />
            </Container>
        </>
        :
            <Container>
                <Skeleton as="hero"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="film"/>
                <Skeleton as="hero"/>
            </Container>
    )
}

export default Watch;


export const fetchData = async (API, storeData, setisLoaded, setErrors) => {
    setisLoaded(false);
    const res = await fetch(API, {mode: 'cors'});
    res
        .json()
        .then(res => storeData(res.data), setisLoaded(true))
        .catch(err => setErrors(err));
}
