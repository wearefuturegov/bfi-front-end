import React from 'react';
import styled from 'styled-components';
import * as vars from '../../../../variables.js';

import Heading from '../../../bfi-components/Heading'
import Button from '../../../bfi-components/Button'
import ImageBanner from '../../../bfi-components/ImageBanner';

import LogoSrc from '../../../../images/logos/bfiplayer-logo-white.svg';
import BannerImg1 from './player-banner-img-1.jpg';
import BannerImg2 from './player-banner-img-2.png';

const PlayerLogo = styled.img`
    margin-bottom: 25px;
`
const BFIPlayerBanner = () => {
    return (
        <>
        <ImageBanner colour="0, 0, 0" image={BannerImg1} image_position="right top" image_origin="content-box">
            <PlayerLogo src={LogoSrc} alt="BFI Player" />
            <Heading as="h2" style="h1">Watch the greatest global cinema</Heading>
            <p>From £2.50 per film, or £4.99 a month.</p>
            
            <Button>Try 14 days free</Button>
        </ImageBanner>
        <ImageBanner colour="pink" image={BannerImg2} image_position="left center" text_right={true} image_origin="content-box">
            <Heading as="h2" style="h1">Stream on your phone, tablet, laptop and TV.</Heading>
            
            <Button colour={vars.colour.pink_dark} highlight={vars.colour.white}>Try 14 days free</Button>
        </ImageBanner>
        </>
    )
}

export default BFIPlayerBanner;
