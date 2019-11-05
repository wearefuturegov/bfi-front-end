import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom'

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Values extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Values</Heading>
                <Link to="/values/principles">Principles</Link>
            </Container>
        )
    }
}

export default Values;
