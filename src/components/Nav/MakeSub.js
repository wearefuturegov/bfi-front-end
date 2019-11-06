import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

export class MakeSub extends Component {
    render() {
        return (
            <nav className="sub-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li><Link to="/">Get funding</Link></li>
                            <li><Link to="/">Progress your career</Link></li>
                            <li><Link to="/">Get tax relief</Link></li>
                            <li><Link to="/">Understand the film industry</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default MakeSub
