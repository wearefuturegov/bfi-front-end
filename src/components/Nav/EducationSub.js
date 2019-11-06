import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

export class EducationSub extends Component {
    render() {
        return (
            <nav className="sub-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li><Link to="/">Education events</Link></li>
                            <li><Link to="/">Resources to teach</Link></li>
                            <li><Link to="/">Resources to learn</Link></li>
                            <li><Link to="/">Opportunities for young filmmakers</Link></li>
                            <li><Link to="/">BFI Policy</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default EducationSub
