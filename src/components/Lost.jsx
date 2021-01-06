import React from "react";
import { Link } from "react-router-dom";
import Fieldguide from "./Fieldguide"

export default function Lost(){
    return(
        <div>
            <h2>you have found your way to an unfound url, perhaps you were looking for something in the url or you found a broken link. Good luck foraging and <Link to="contact">drop a line</Link> if you think you found a bug.</h2>
            {/* <Fieldguide /> */}
        </div>
    );
}