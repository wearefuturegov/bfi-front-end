import React, { Component } from 'react';
import styled from 'styled-components';
import Principle from '../Principle';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'

const StyledHeading = styled.h1`
`
 
class Principles extends Component {
    state = {
        principles: [
          {
            id:1,
            title: 'test principle 1'
          },
          {
            id:2,
            title: 'test principle 2'
          },
          {
            id:3,
            title: 'test principle 3'
          }
        ]
      }

    render () {
        return ( 
            <Container>
                { this.state.principles.map((principle) => (
                    <Principle key={ principle.id } principle={ principle }></Principle>
                )) } 
            </Container>
        )
    }
}

export default Principles;
