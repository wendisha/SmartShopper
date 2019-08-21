import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './NavBar'
import About from './About'
import TopSearches from './TopSearches'
import Categories from './Categories'
import Dropdown from './Dropdown';



function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Router>
        <Dropdown/>
        <Route exact path="/About" component={About} />

        <p>
          <NavBar/>
          <Categories/>
        </p>

         </Router>
       </header>
    </div>
  );
}

export default App;
