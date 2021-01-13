import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Component, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import Logbook from "./components/Logbook";
import Fieldguide from "./components/Fieldguide";
import Resources from "./components/Reources";
import Lost from "./components/Lost";
import Contact from "./components/Contact";
import FieldguideEntry from "./components/FieldguideEntry";
import Safepractices from "./components/Safepractices";
import PublicLands from "./components/PublicLands";

import { mushrooms } from "./shared/mushroomIndex";
import Backend from "./components/Backend";

//bring the mushrooms into state at this level.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mushrooms: mushrooms };
  }

  render() {
    const FieldguidePage = ({ match }) => {
      return (
        <FieldguideEntry
          specimen={
            this.state.mushrooms.filter(
              (mushroom) =>
                mushroom.binomial.toLowerCase().replace(/\s/g, "-") ===
                match.params.binomial
            )[0]
          }
        />
      );
    };

    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route exact path="/fieldguide/" component={Fieldguide} />
          <Route path="/fieldguide/:binomial" component={FieldguidePage} />
          <Route path="/safepractices" component={Safepractices} />
          <Route path="/logbook" component={Logbook} />
          <Route path="/publiclands" component={PublicLands} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/lost-in-the-Fieldguide" component={Lost} />
          <Route path="/backend" component={Backend} />{" "}
          {/*should perhaps set state to get rid of header and footer*/}
          <Redirect to="/lost-in-the-Fieldguide" />
        </Switch>

        <Footer className="footer" />
      </Router>
    );
  }
}

export default App;
