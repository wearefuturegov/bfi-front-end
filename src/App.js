import React, { Component, useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Nav from './components/Nav/Nav';
import Container from './components/bfi-components/Container';
import Heading from './components/bfi-components/Heading';
import './App.scss';

import Watch from './components/Pages/Watch';
  import BFIPlayer from './components/Pages/watch/BFIPlayer';
import Explore from './components/Pages/Explore';
import Education from './components/Pages/Education';
import Make from './components/Pages/Make';
import About from './components/Pages/About';
import Support from './components/Pages/Support';


export default withRouter(function App({ location }) {
  const history = createBrowserHistory();
  const rootElement = document.getElementById("root");
  const [currentHome, setCurrentHome] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    if (pathname.split('/')[1] == '') {
      setCurrentHome('watch');
      document.body.classList = ('watch')
    } else {
      setCurrentHome(pathname.split('/')[1]);
      document.body.classList = (pathname.split('/')[1])
    }
       
  }, [location.pathname]);


  const NotFound = ({ location }) => (
    <Container>
      <Heading as="h2">No match for <code>{location.pathname}</code></Heading>
    </Container>
  )

  return(
    <>
    <Nav currentHome={currentHome} />
    <Switch>
      <Route path="/" exact component={Watch} />
        <Route path="/watch/bfi-player" exact component={BFIPlayer} />
      <Route path="/explore" exact component={Explore} />
      <Route path="/make" exact component={Make} />
      <Route path="/education" exact component={Education} />
      <Route path="/about-us" exact component={About} />
      <Route path="/support-and-join" exact component={Support} />

      <Route component={NotFound} />
    </Switch>
    </>
  );
});
