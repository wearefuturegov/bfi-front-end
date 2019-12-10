import React from 'react';
import styled from 'styled-components';
import * as vars from '../../../../variables.js';

import Heading from '../../../bfi-components/Heading'
import ImageBanner from '../../../bfi-components/ImageBanner';

import BannerImg1 from './southbank-banner-img-1.jpg';
import BannerImg2 from './southbank-banner-img-2.jpg';
import BannerImg3 from './southbank-banner-img-3.jpg';
import BannerImg4 from './southbank-banner-img-4.jpg';
import BannerImg5 from './southbank-banner-img-5.jpg';

const SouthBankBanner = () => {
    return (
        <>
        <ImageBanner colour="pink" image={BannerImg1}>
            <Heading as="h2" style="h1">Watch BfI Picked contemporary and classic films in cinema</Heading>
            
            <button>Event Calendar</button>
        </ImageBanner>
        <ImageBanner colour="pink" image={BannerImg2} image_size="large" image_position="left center" text_right={true}>
            <Heading as="h2" style="h1">Access books, docs, journals about film and TV in our library</Heading>
        </ImageBanner>
        <ImageBanner colour="pink" image={BannerImg3} image_size="large" image_position="right center">
            <Heading as="h2" style="h1">Discover the BFI National Archive for free at Mediatheque</Heading>
        </ImageBanner>
        <ImageBanner colour="pink" image={BannerImg4} image_size="large" image_position="left center" text_right={true}>
            <Heading as="h2" style="h1">Hang out at our bars, resturants and shops</Heading>
        </ImageBanner>
        <ImageBanner colour="pink" image={BannerImg5} image_size="large" image_position="right center">
            <Heading as="h2" style="h1">Get directions</Heading>
        </ImageBanner>
        </>
    )
}

export default SouthBankBanner;
