import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavigationBar from './NavigationBar'
import About from './About'
import TopSearches from './TopSearches'
import Categories from './Categories'
import NavBar from './NavBar'
import DropDown from './DropDown'
import Contact from './Contact'
import CardComponent from './CardComponent'
import SearchContainer from './Containers/SearchContainer'



function App() {
  return (
    <div>
       <header className="App-header">
        <Router>
         <NavBar/>
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
         <SearchContainer/>
                  <DropDown/>
         </Router>
       </header>
    </div>
  );
}

export default App;
