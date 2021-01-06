import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BinomialEntry from "./BinomialEntry";

function MushroomRouter() {
    return(
<>
         {/* I will want to make this autogenerate with a map function */}
        <Router>
             
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/fieldguide/binomialName1">binomialName1</Link>
            </li>
            <li>
            <Link to="/fieldguide/binomialName2">binomialName2</Link>
            </li>
            <li>
              <Link to="/fieldguide/binomialName3">binomialName3</Link>
            </li>
          </ul>
        </nav>

        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/fieldguide/BinomialName1" render={(props)=> <BinomialEntry {...props}/>}/>
            {/* <Route path="/fieldguide/" render={}/>
            <Route path="/fieldguide/" render={}/> */}
        </Switch>
      </div>
    
    </Router>
    </>
    );
}


export default function Fieldguide(){
    return(
        <div>
            <MushroomRouter/>
            <p>Fieldguide</p>
        </div>
    );
}