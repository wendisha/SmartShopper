import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavigationBar from './NavigationBar'
import About from './About'
import TopSearches from './TopSearches'
import Categories from './Categories'
import PracticeBar from './PracticeBar'
import DropDown from './DropDown'

import SearchContainer from './Containers/SearchContainer'



function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Router>

         <PracticeBar/>
        <Route exact path="/About" component={About} />

        <p>
        <DropDown/>  <center> <SearchContainer/> </center>

        </p>

         </Router>
       </header>
    </div>
  );
}

export default App;
