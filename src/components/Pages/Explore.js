import React, { Component } from 'react';
import Skeleton from '../bfi-components/Skeleton'

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
import ArticleGrid from '../bfi-components/ArticleGrid'
 
class Explore extends Component {
    render () {
        return (
        <>
            <Container>
                <Heading as="h2">Top Stories</Heading>
                <ArticleGrid />
            </Container>

            <Container>
                <Heading as="h2">Lists</Heading>
                <Skeleton as="hero"/>
            </Container>

            <Container>
                <Heading as="h2">BFI Film Releases</Heading>
                <Skeleton as="hero"/>
            </Container>

            <Container>
                <Heading as="h2">BFI Book Release</Heading>
                <Skeleton as="hero"/>
            </Container>

            <Container>
                {/* other page links */}
                <Skeleton as="hero"/>
            </Container>
        </>
        )
    }
}

export default Explore;
