import { marker } from "leaflet";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// This component renders the main map element. It takes an initial single location as a prop to be rendered as a map view. Can be partnered with render locations to display markes.
// expects an initial location:[[longitude, latitude], zoom], and a css ID,  which most importantly sets the size of the map;

export const RenderPublicLands = () => {};

export const RenderMap = ({ containerID, initialLocation, children }) => {
  // console.log(children);
  return (
    <MapContainer
      id={containerID}
      center={initialLocation.location}
      zoom={initialLocation.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children} {/*this is where the markers are called*/}
    </MapContainer>
  );
};

// For the main public Lands page
//Renders maker, a popup
// expects an array of objects with attributes locations = [longNUM,latNum] and a name = nameString

//future addition a circle or svg map overlay

export const RenderLocations = ({ locations, children }) => {
  // const [markerz, updateMarker] = useState(null);
  const markers = locations.map((location) => {
    const childrenWithProps = React.cloneElement(children, {
      location: location,
    });

    return (
      <Marker position={location.location} key={location.key}>
        <Popup>
          <h3>{location.name}</h3>
          {childrenWithProps}
        </Popup>
      </Marker>
    );
  });

  return markers;
};

// provides a maps link street address to assist in getting there?
export const RenderPublicLandsinfo = ({ location }) => {
  const addressQuery = location.address.replace(/\s/g, "+").replace(/\,/g, "");
  return (
    <>
      <a
        href={`https://maps.google.com/?&daddr=${addressQuery}`}
        target="blank"
      >
        <p>Current Weather</p>
        <p>Upcoming Weather</p>
        <p>Previous weather</p>
        <p>sky cover</p>
        {location.address}
      </a>
    </>
  );
};

//For the logbook section
// renders popup text for forage finds for user logbook section

export const RenderForageFindsInfo = (locations) => {
  const finds = (
    <>
      <p>"pip"</p>
      {/* should display thumbnail photo */}
      {/* date with seasonal indicator... in logbook saving some weather data would be good as well*/}
      {/* naem of specimen */}
      {/* NOtes*/}
      {/* /link to fieldguid entry */}
    </>
  );

  return finds;
};

//subcomponents

// rendeers list of locations marked on the map in a seperate div
export const RenderListofLocations = ({ locations }) => {
  const shiftFocus = (ev) => {
    const el = ev.target;
    console.log(el);
  };
  const locationList = locations.map((location) => {
    if (location.weather) {
      //finds
      return <></>;
    } else {
      // public lands
      return (
        //turn this into some sorta card/accordian
        <a key={location.key} onClick={shiftFocus}>
          <div>
            <h3>{location.name}</h3>
            <p>{location.desc}</p>
          </div>
        </a>
      );
    }
  });

  return <>{locationList}</>;
};

///////////////////
//external state example from docs https://react-leaflet.js.org/docs/
const center = [51.505, -0.09];
const zoom = 13;

export function DisplayPosition({ map }) {
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>reset</button>
    </p>
  );
}

export function ExternalStateExample() {
  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    []
  );

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}

// the old code from v1

// // epects an array of [name, [longitude, latitude], zoom]
// export const renderLocations = (publicLands) => {};

// // map & filter the data
// const publicLandsList = [
//   ["Snake Den", [41.84680296, -71.533], 14],
//   ["South Kingston Land Trust", [41.407361, -71.584253], 15],
//   ["George Washington State Forest", [41.944297, -71.770591], 13],
//   ["Lincoln Woods", [41.897485, -71.431989], 15],
//   ["Big River Management Area", [41.626606, -71.591892], 13],
// ];

// let landLabels = [];

// for (let i = 0; i < publicLandsList.length; i++) {
//   // camelCase name
//   let parkID =
//     publicLandsList[i][0].charAt(0).toLowerCase() +
//     publicLandsList[i][0].slice(1).replace(/ /g, "");
//   landLabels.push(parkID);

//   // make markers
//   for (let i = 0; i < landLabels.length; i++) {
//     landLabels[i] = L.circle(publicLandsList[i][1], {
//       color: "teal", // add to color ways
//       fillColor: "cyan",
//       fillOpacity: 0.05,
//       radius: 1500,
//     });
//     landLabels[i].bindPopup(publicLandsList[i][0]);
//   }
// }

// // group for markers
// let markers = L.layerGroup(landLabels);
// markers.addTo(mymap);

// function rootabega() {
//   mymap.removeLayer(markers);
// }

// // TOGGLE MARKERS
// // change to arrow function?
// let zoom;
// mymap.on("zoom", function () {
//   zoom = mymap.getZoom();

//   console.log(zoom);
//   if (zoom > 12) {
//     mymap.removeLayer(markers);
//   } else if (zoom <= 12) {
//     markers.addTo(mymap);
//   }
// });

// // assign focus of map
// function changeMap([lat, lon], z) {
//   mymap.setView([lat, lon], z);
// }

// //console helper function to find map location and zoom level of new locations.
// function getLatLong(on) {
//   if (on) {
//     document.querySelector("#mapid").addEventListener("click", function () {
//       console.log(mymap.getCenter(), mymap.getZoom());
//     });
//   }
// }

// // locate yourself
// document.querySelector("#locate").addEventListener("click", function () {
//   mymap.locate({ setView: true, maxZoom: 16 });
// });
// document.querySelector("#statewide").addEventListener("click", function () {
//   mymap.setView([41.7129, -71.4921], 9);
// });

// function onLocationFound(e) {
//   var radius = e.accuracy;

//   L.marker(e.latlng)
//     .addTo(mymap)
//     .bindPopup("You are within " + radius + " meters from this point")
//     .openPopup();

//   L.circle(e.latlng, radius).addTo(mymap);
// }
// function onLocationError(e) {
//   alert(e.message);
// }

// mymap.on("locationfound", onLocationFound);
// mymap.on("locationerror", onLocationError);

// // relookat this to understand the function wrapper at the end.

// // re-look at onclick syntax....
// // element.onclick=function(parems)

// // map & filter creating this

// document.querySelector("#snakeDen").addEventListener("click", function () {
//   changeMap([41.84680296, -71.533], 14);
// });
// document
//   .querySelector("#SouthKingstonLandTrust")
//   .addEventListener("click", function () {
//     changeMap([41.407361, -71.584253], 15);
//   });
// document
//   .querySelector("#georgeWashingtonStateForest")
//   .addEventListener("click", function () {
//     changeMap([41.944297, -71.770591], 13);
//   });
// document.querySelector("#lincolnWoods").addEventListener("click", function () {
//   changeMap([41.897485, -71.431989], 15);
// });
// document
//   .querySelector("#bigRiverManagementArea")
//   .addEventListener("click", function () {
//     changeMap([41.626606, -71.591892], 13);
//   });
