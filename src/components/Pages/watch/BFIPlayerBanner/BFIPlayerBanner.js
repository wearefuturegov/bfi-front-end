import React from 'react';
import styled from 'styled-components';
import * as vars from '../../../../variables.js';

import Heading from '../../../bfi-components/Heading'
import ImageBanner from '../../../bfi-components/ImageBanner';

import LogoSrc from '../../../../images/logos/bfiplayer-logo-white.svg';
import BannerImg1 from './player-banner-img-1.jpg';

const PlayerLogo = styled.img`
    margin-bottom: 25px;
`
const BFIPlayerBanner = () => {
    return (
        <ImageBanner colour="#000" image={BannerImg1} image_position="right top">
            <PlayerLogo src={LogoSrc} alt="BFI Player" />
            <Heading as="h2" style="h1">Watch the greatest global cinema</Heading>
            <p>From £2.50 per film, or £4.99 a month.</p>
            
            <button>Try 14 days free</button>
        </ImageBanner>
    )
}

export default BFIPlayerBanner;
