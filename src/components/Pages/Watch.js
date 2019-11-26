import React, { useState, useEffect } from 'react';

import Container from '../bfi-components/Container';
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
