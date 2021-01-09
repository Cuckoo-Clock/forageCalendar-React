import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className={props.className}>
      <nav>
        <Link to="/safepractices">
          <h3>Notes on Safe and Sustainable Foraging</h3>
        </Link>
        <ul>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/logbook">Logbook</Link>
          </li>
          <li>
            <Link to="/fieldguide">Fieldguide</Link>
          </li>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
          <li>
            <Link to="/resources">Further Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">About</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
