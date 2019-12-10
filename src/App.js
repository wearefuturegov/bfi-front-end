import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createGlobalStyle } from 'styled-components'

import Header from './components/Header/Header';
import Container from './components/bfi-components/Container';
import Heading from './components/bfi-components/Heading';

import Watch from './components/Pages/Watch';
  import BFIPlayer from './components/Pages/watch/BFIPlayer';
  import FilmPage from './components/Pages/watch/FilmPage';

import Explore from './components/Pages/Explore';
import Education from './components/Pages/Education';
import Make from './components/Pages/Make';
import About from './components/Pages/About';

import Support from './components/Pages/Support';
  import Member from './components/Pages/support/Member';


export default withRouter(function App({ location }) {

  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans:400,600,700&display=swap');

    body {
      font-family: 'Open Sans', sans-serif;
    }
  `
  const history = createBrowserHistory();
  const rootElement = document.getElementById("root");
  const [currentHome, setCurrentHome] = useState(location.pathname);
  const [whiteHeader, setwhiteHeader] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    if (pathname.split('/')[2]) {
      setwhiteHeader(true);
    } else {
      setwhiteHeader(false);
    }
    if (pathname.split('/')[1] === '') {
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
    <GlobalStyle />
    <Header currentHome={currentHome} whiteHeader={whiteHeader}/>
    <Switch>
      <Route path="/" exact component={Watch} />
        <Route path="/watch/bfi-player" exact component={BFIPlayer} />
        <Route path="/watch/film/:id" exact component={FilmPage}></Route>
      <Route path="/explore" exact component={Explore} />
      <Route path="/make" exact component={Make} />
      <Route path="/education" exact component={Education} />
      <Route path="/about-us" exact component={About} />
      <Route path="/support-and-join" exact component={Support} />
        <Route path="/become-a-member" exact component={Member} />

      <Route component={NotFound} />
    </Switch>
    </>
  );
});
