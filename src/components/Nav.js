import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from './bfi-components/Container'

export class Nav extends Component {
    render() {
        return (
            <nav>
                <Container>
                    <div className="inner">
                        <span><Link to="/">BFI Design System</Link></span>
                        <ul>
                            <li><Link to="/values">Values</Link></li>
                            <li><Link to="/content">Content</Link></li>
                            <li><Link to="/design">Design</Link></li>
                            <li><Link to="/components">Components</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        )
    }
}

export default Nav
