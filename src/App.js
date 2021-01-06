
import './App.css';
import Calendar from "./components/Calendar";
import Logbook from "./components/Logbook";
import Fieldguide from "./components/Fieldguide";
import Maps from "./components/Maps";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Resources from './components/Reources';
import Lost from "./components/Lost";
import Contact from "./components/Contact";
import React, { useState } from 'react';

function App() {
  const [displayFooter, toggleFooter] = useState(true);

 
  return (
    
    <Router>
      {/* <div> */}
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/calendar" component={Calendar}/>
          
          {/* <Route path="/fieldguide"> */}
            {/* <Fieldguide /> */}
          {/* </Route> */}
          <Route path="/logbook" component={Logbook}/>
          <Route path="/maps" component={Maps}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/contact" component={Contact}/>
          <Route path='/lost-in-the-Fieldguide' component={Lost} />
          
          <Redirect to='/lost-in-the-Fieldguide'/>
        </Switch>
        <Footer className={displayFooter ? "footer" : "footer-off"}>
          <button onClick={() => {toggleFooter(!displayFooter)}}>goodbye</button>
          </Footer>
    </Router>
    
  );
}

export default App;
