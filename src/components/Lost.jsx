import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fieldguide from "./Fieldguide";

export default function Lost(props) {
  const [toggle, toggleDiv] = useState("show");
  return (
    <div>
      <div className={toggle}>
        <button onClick={() => toggleDiv("hide")}>X</button>
        <h2>
          you have found your way to an unfound url, perhaps you were looking
          for something in the url or you found a broken link. Good luck
          foraging and <Link to="contact">drop a line</Link> if you think you
          found a bug.
        </h2>
      </div>
      {/* <Fieldguide mushrooms={props.mushrooms} /> */}
    </div>
  );
}
