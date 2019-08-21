import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavigationBar from './NavigationBar'
import About from './About'
import TopSearches from './TopSearches'
import Categories from './Categories'
import Dropdown from './Dropdown';
import SearchContainer from './Containers/SearchContainer'



function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Router>
         <NavigationBar/>
        <Dropdown/>
        <Route exact path="/About" component={About} />

        <p>
          <SearchContainer/>
    
        </p>

         </Router>
       </header>
    </div>
  );
}

export default App;
