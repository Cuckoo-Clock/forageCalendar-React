
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from 'react';

import Header from './components/Header';
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Logbook from "./components/Logbook";
import Fieldguide from "./components/Fieldguide";
import Maps from "./components/Maps";
import Resources from './components/Reources';
import Lost from "./components/Lost";
import Contact from "./components/Contact";
import FieldguideEntry from './components/FieldguideEntry';

import { mushrooms } from "./shared/mushroomIndex";


//bring the mushrooms into state at this level.

function App() {
  
  
  const [displayFooter, toggleFooter] = useState(true);

  const FieldguidePage = ({match}) => {
    return(
      <FieldguideEntry
      specimen={mushrooms.filter(specimen => specimen.binomial.toLowerCase().replace(/\s/g, '-') === match.params.binomial)[0]}
      />
    )
    
  }
 
  return (
    
    <Router>
      {/* <div> */}
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/calendar" component={Calendar}/>
          <Route path="/fieldguide" component={Fieldguide}/>
          <Route path='/fieldguide/:binomial' component={FieldguidePage} />
          <Route path="/logbook" component={Logbook}/>
          <Route path="/maps" component={Maps}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/contact" component={Contact}/>
          <Route path='/lost-in-the-Fieldguide' component={Lost} />
         
          <Redirect to='/lost-in-the-Fieldguide'/>
        </Switch>


        <Footer className={displayFooter ? "footer" : "footer-off"}>
          <button onClick={() => {toggleFooter(!displayFooter)}}>goodbye</button> {/*this is just a state hook test, perhaps can be used for view*/}
          </Footer>
    </Router>
    
  );
}

export default App;
