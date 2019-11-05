import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Container from './components/bfi-components/Container';
import Heading from './components/bfi-components/Heading';
import Home from './components/Pages/Home';
import './App.scss';

import Values from './components/Pages/Values';
import Principles from './components/Pages/Principles';

import Content from './components/Pages/Content';

import Design from './components/Pages/Design.js';

import Components from './components/Pages/Components';


class App extends Component {
  render() {

    const NotFound = ({ location }) => (
      <Container>
        <Heading as="h2">No match for <code>{location.pathname}</code></Heading>
      </Container>
    )

    return(
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/values" exact component={Values} />
            <Route path="/values/principles" exact component={Principles} />
          <Route path="/content" exact component={Content} />
          <Route path="/design" exact component={Design} />
          <Route path="/components" exact component={Components} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
