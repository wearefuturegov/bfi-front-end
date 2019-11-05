import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Content extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Content</Heading>
            </Container>
        )
    }
}

export default Content;
