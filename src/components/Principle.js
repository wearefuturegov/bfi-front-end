import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class Principle extends Component {
    render() {
        return (
            <div>
                <p>{this.props.principle.title}</p>
            </div>
        )
    }
}

Principle.propTypes = {
    principle: Proptypes.object.isRequired
}

export default Principle
