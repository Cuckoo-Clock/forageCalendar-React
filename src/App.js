
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Component, useState } from 'react';

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



class App extends Component{
  constructor(props){
    super(props)
    this.state= {mushrooms: mushrooms}
  }
  
 
  
 render(){
  const FieldguidePage = ({match}) => {
    
    console.log('gone to it')
    return(
      
      <FieldguideEntry 
      specimen={this.state.mushrooms.filter(mushroom => mushroom.binomial.toLowerCase().replace(/\s/g, '-') === match.params.binomial)[0] }
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
          <Route  exact path ="/fieldguide/" component={Fieldguide}/>
          <Route path='/fieldguide/:binomial' component={FieldguidePage} />
          <Route path='/fieldguide/:binomial' component={FieldguidePage} />
          
          <Route exact path="/logbook" component={Logbook}/>
          <Route path="/maps" component={Maps}/>
          <Route path="/resources" component={Resources}/>
          <Route path="/contact" component={Contact}/>
          <Route path='/lost-in-the-Fieldguide' component={Lost} />
         
          <Redirect to='/lost-in-the-Fieldguide'/>
        </Switch>


        <Footer className="footer">
         
          </Footer>
    </Router>
    
  );
          }
}

export default App;
