import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <p>Header</p>
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
        </div>
    );
}