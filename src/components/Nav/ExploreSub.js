import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../bfi-components/Container'

export class ExploreSub extends Component {
    render() {
        return (
            <nav className="sub-nav">
                <Container>
                    <div className="inner">
                        <ul>
                            <li><Link to="/">Sight &amp; Sound</Link></li>
                            <li><Link to="/">Editorials</Link></li>
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/">Film Lists</Link></li>
                            <li><Link to="/">BFI Releases</Link></li>
                            <li><Link to="/">BFI National Archive</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default ExploreSub
