
import './App.css';
import Calendar from "./components/Calendar";
import Logbook from "./components/Logbook";
import Fieldguide from "./components/Fieldguide";
import Maps from "./components/Maps";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/logbook">Logbook</Link>
            </li>
            <li>
              <Link to="/fieldguide">fieldguide</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/logbook">
            <Logbook />
          </Route>
          <Route path="/fieldguide">
            <Fieldguide />
          </Route>
          <Route path="/maps">
            <Maps />
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
