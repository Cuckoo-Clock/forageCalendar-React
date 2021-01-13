import React, { useState } from "react";
import { publicLands } from "../shared/public_lands";
import {} from "react-leaflet";
import {
  RenderMap,
  RenderLocations,
  ExternalStateExample,
  DisplayPosition,
} from "./Maps";

export default function PublicLands() {
  const ri = { location: [41.7129, -71.4921], zoom: 9 }; // long, lat, zoom level
  //

  return (
    <>
      <div>
        <RenderMap containerID="public-lands" initialLocation={ri}>
          <RenderLocations locations={publicLands} />
        </RenderMap>
      </div>
    </>
  );
}
