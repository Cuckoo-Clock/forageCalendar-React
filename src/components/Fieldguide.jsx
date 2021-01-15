import React from "react";
import { mushrooms } from "../shared/mushroomIndex";

import { BrowserRouter as Link } from "react-router-dom";

function MushroomRouter({ mushrooms }) {
  const fieldguide = mushrooms.map((mushroom) => {
    let id = mushroom.binomial.toLowerCase().replace(/\s/g, "-");

    return (
      <>
        <Link
          onClick={() => {
            console.log(id);
          }}
          key={id}
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

export default function Fieldguide() {
  return (
    <div>
      <p>breadcrumbs fieldguide//</p>
      <br />
      <MushroomRouter mushrooms={mushrooms} />
    </div>
  );
}
