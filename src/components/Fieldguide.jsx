import React from "react";
import { mushrooms } from "../shared/mushroomIndex";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BinomialEntry from "./FieldguideEntry";

function MushroomRouter({mushrooms}) {
    
    const fieldguide = mushrooms.map( mushroom => {
        let id = mushroom.binomial.toLowerCase().replace(/\s/g, '-');
    
        return(
            <Link key={id} to={`/fieldguide/${id}`}>
            <div className="fieldguide-item" > 
                <img src={mushroom.photo} alt={mushroom.binomial}/>
                <p>{mushroom.names}</p>
                <p>{mushroom.binomial}</p>
            </div>
            </Link>
        );
    });
    return(
    <>
    {fieldguide}
    </>
    );
}

export default function Fieldguide(){
    return(
        <div>
            <p>Fieldguide</p>
            <MushroomRouter mushrooms={mushrooms}/>
            
        </div>
    );
}