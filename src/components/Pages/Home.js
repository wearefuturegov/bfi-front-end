import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Home extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Hello World</Heading>
            </Container>
        )
    }
}

export default Home;
