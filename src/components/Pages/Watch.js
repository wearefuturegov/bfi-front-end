import React, { useState, useEffect } from 'react';

import Container from '../bfi-components/Container';
import Heading from '../bfi-components/Heading';
import Skeleton from '../bfi-components/Skeleton';
import FilmGrid from '../bfi-components/FilmGrid';

const Watch = () => {
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(false);
    }, [])

    return (
        <Container>
            {!isLoading && 
                <Heading as="h2">Watch with us</Heading>
                <FilmGrid />
            }
            {isLoading && 
                <>
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
                </>
            }
        </Container>
    )
}

export default Watch;
