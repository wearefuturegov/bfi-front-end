import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

export class SupportSub extends Component {
    render() {
        return (
            <nav className="sub-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li><Link to="/">Membership</Link></li>
                            <li><Link to="/">Support the BFI</Link></li>
                            <li><Link to="/">Partner with the BFI</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default SupportSub
