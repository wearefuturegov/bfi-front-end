import React, { useState, useEffect } from 'react';

import Container from '../bfi-components/Container';
import Heading from '../bfi-components/Heading';
import Skeleton from '../bfi-components/Skeleton';
import FilmGrid from '../bfi-components/FilmGrid';
import FilmShowingsGrid from '../bfi-components/FilmShowingsGrid';
import HomeBanner from '../bfi-components/HomeBanner'

import WatchBannerImg from '../../images/home-banners/watch-banner.jpg';

const Watch = () => {
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(false);
    }, [])

    return (
        !isLoading ? 
        <> 
            <HomeBanner title="Watch a new film, rediscover your old favourites, and get inspired." image={WatchBannerImg} />
            <Container>
                <Heading as="h2">Now on Southbank</Heading>
                <FilmShowingsGrid />
            </Container>

            <Container>
                <Heading as="h2">Watch with us</Heading>
                <FilmGrid />
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
