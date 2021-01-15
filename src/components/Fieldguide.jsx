import React from "react";

import { BrowserRouter as Link } from "react-router-dom";

function MushroomRouter(props) {
  const fieldguide = props.mushrooms.map((mushroom) => {
    let id = mushroom.binomial.toLowerCase().replace(/\s/g, "-");

    return (
      <>
        <Link
          onClick={() => {
            console.log(id);
          }}
          key={mushroom.key}
          to={`/fieldguide/${id}`}
        >
          <div className="fieldguide-item">
            <img src={mushroom.photo} alt={mushroom.binomial} />
            <p>{mushroom.names}</p>
            <p>{mushroom.binomial}</p>
          </div>
        </Link>
      </>
    );
  });
  return <>{fieldguide}</>;
}

export default function Fieldguide(props) {
  return (
    <div>
      <p>breadcrumbs fieldguide//</p>
      <br />
      <MushroomRouter mushrooms={props.mushrooms} />
    </div>
  );
}
