import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Design extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Design</Heading>
            </Container>
        )
    }
}

export default Design;
