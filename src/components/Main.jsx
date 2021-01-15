import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Calendar from "./Calendar";
import Logbook from "./Logbook";
import Fieldguide from "./Fieldguide";
import Resources from "./Reources";
import Lost from "./Lost";
import Contact from "./Contact";
import FieldguideEntry from "./FieldguideEntry";
import Safepractices from "./Safepractices";
import PublicLands from "./PublicLands";

// import { mushrooms } from "./shared/mushroomIndex";
import Backend from "./Backend";

const mapStateToProps = (state) => {
  return {
    publicLands: state.publicLands,
    mushrooms: state.mushrooms,
  };
};

class Main extends Component {
  render() {
    const FieldguidePage = ({ match }) => {
      return (
        <FieldguideEntry
          specimen={
            this.props.mushrooms.filter(
              (mushroom) =>
                mushroom.binomial.toLowerCase().replace(/\s/g, "-") ===
                match.params.binomial
            )[0]
          }
        />
      );
    };

    return (
      <>
        <Header />
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route
            exact
            path="/fieldguide/"
            render={() => <Fieldguide mushrooms={this.props.mushrooms} />}
          />
          <Route path="/fieldguide/:binomial" component={FieldguidePage} />
          <Route path="/safepractices" component={Safepractices} />
          <Route path="/logbook" component={Logbook} />
          {/* <Route path="/lo">  ForageLogger?*/}
          <Route path="/publiclands" component={PublicLands} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/lost-in-the-Fieldguide" component={Lost} />
          <Route path="/backend" component={Backend} />{" "}
          {/*should perhaps set state to get rid of header and footer*/}
          <Redirect to="/lost-in-the-Fieldguide" />
        </Switch>

        <Footer className="footer" />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
