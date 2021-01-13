import logo from './logo.svg';
import React from 'react';

import './App.css';
import { Router, Link, navigate } from '@reach/router';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import ShowOneAuthor from './components/ShowOneAuthor';

function App() {

  const goHomeEvent = (e) => {
    navigate("/");
  }

  return (
    <div className="App">
      <h1>This is App.js</h1>
      <Link to="/">All</Link> | <Link to={`/create/`}>Create</Link>

      <button onClick={goHomeEvent}>Go home!</button>
      <Router>
        <AllAuthors path="/"/>
        <CreateAuthor path="/create"/>
        <ShowOneAuthor path="/edit/:name/:id"/>
      </Router>
    </div>
  );
}

export default App;
