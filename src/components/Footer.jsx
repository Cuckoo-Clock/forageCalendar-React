import React from "react";
import { Link } from "react-router-dom";


export default function Footer(props){
    return(
        <div className={props.className}>
            <p>footer</p>
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
            <li>
              <Link to="/resources">Further Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
        {props.children}
        </div>
    );
}