import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import FetchNotes from './components/FetchNotes'
import Note from './components/Note';
import NoteView from './components/NoteView';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={FetchNotes} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
