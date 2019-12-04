import React, { Component } from 'react';

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
import ComponentDescription from '../ComponentDescription' 

class About extends Component {
    state = {
        components: [
          {
            id:1,
            title: 'Container',
            description: 'The container element that restricts content to max width.',
            code: '<Container>{all child elements}</Container>'
          },
          {
            id:2,
            title: 'Heading',
            description: 'The heading element that is used for all headings, customise which heading size by using as="h3", the default is set to h1.',
            code: '<Heading as="h3">This is a sub title</Heading>'
          }
        ]
      }

    render () {
        return (
            <Container>
                <Heading as="h2">Components</Heading>
                
                { this.state.components.map((comp) => (
                    <ComponentDescription key={ comp.id } comp={ comp }></ComponentDescription>
                )) } 
            </Container>
        )
    }
}

export default About;
