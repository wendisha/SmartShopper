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
import Gallery from './Gallery'

import Contact from './Contact'


import FlipCard from './FlipCard';


import SearchContainer from './Containers/SearchContainer'


function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Router>
         <PracticeBar/>
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
          <DropDown/>
          <center> <SearchContainer/> </center>
         </Router>
       </header>
    </div>
  );
}

export default App;
