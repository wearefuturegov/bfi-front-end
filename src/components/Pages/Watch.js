import React, { useState, useEffect } from 'react';

import Container from '../bfi-components/Container';
import Heading from '../bfi-components/Heading';
import Skeleton from '../bfi-components/Skeleton';
import FilmGrid from '../bfi-components/FilmGrid';
import FilmShowingsGrid from '../bfi-components/FilmShowingsGrid';
import HomeBanner from '../bfi-components/HomeBanner'

import WatchBannerImg from '../../images/home-banners/watch-banner.jpg';

import BFIPlayerBanner from "./watch/BFIPlayerBanner/BFIPlayerBanner";

const Watch = () => {
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        setisLoaded(true);
    }, [])

    return (
        isLoaded ? 
        <> 
            <HomeBanner title="Watch a new film, rediscover your old favourites, and get inspired." image={WatchBannerImg} />
            
            {/* <Container>
                <Heading as="h2">Now on Southbank</Heading>
                <FilmShowingsGrid />
            </Container> */}

            <Container>
                <Heading as="h2">Watch with us</Heading>
                <FilmGrid />
            </Container>

            <Container>
                <Heading as="h2">Watch at home</Heading>
                <BFIPlayerBanner />
            </Container>

            <Container>
                <Heading as="h2">Visit BFI Southbank</Heading>
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
