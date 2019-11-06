import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom'

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Explore extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Explore</Heading>
            </Container>
        )
    }
}

export default Explore;
