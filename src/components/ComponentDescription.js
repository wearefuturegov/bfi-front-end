import React, { Component } from 'react'
import Proptypes from 'prop-types';
import Heading from './bfi-components/Heading'

export class ComponentDescription extends Component {

    render() {
        return (
            <div>
                <Heading as="h3">{this.props.comp.title}</Heading>
                <p>{this.props.comp.description}</p>
                <code>{this.props.comp.code}</code>
            </div>
        )
    }
}

ComponentDescription.propTypes = {
    comp: Proptypes.object.isRequired
}

export default ComponentDescription
