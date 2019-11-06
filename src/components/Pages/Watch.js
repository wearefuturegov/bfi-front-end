import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'
import Skeleton from '../bfi-components/Skeleton'

const Watch = () => {
    return (
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
