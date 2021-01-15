// change this
import { useState } from "react";
import { apiKey } from "./apiKey.js";
import React from "react";

// how to cache weather?

// make as few calls as possinle to get all the info, this should happen from the server and then get passed forward to the client

// how do I differentiate between user location and the various public lands
// long term look at weather patterns of RI regions... see if there is an overall architecture to it.

// for geolocation -- more thorough version here https://www.tutorialrepublic.com/html-tutorial/html5-geolocation.php

//  // Define callback function for failed attempt
//  function errorCallback(error) {
//     if(error.code == 1) {
//         result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
//     } else if(error.code == 2) {
//         result.innerHTML = "The network is down or the positioning service can't be reached.";
//     } else if(error.code == 3) {
//         result.innerHTML = "The attempt timed out before it could get the location data.";
//     } else {
//         result.innerHTML = "Geolocation failed due to unknown error.";
//     }
// }

//set redux state that the weather has been called for the day
//   weatherState = true; //Flag we haz weather
//   weather = setState({ somefrickingWeather }); //load the weather into state

//POTENTIALLY jsut calls the NOAA free service.

//   loop through places and fetch

// const [noaaMapGrid, setMapGrid] = useState({
//     gridID: "",
//     gridX: "",
//     gridY: "",
//   });

//  this is personcal location fetc
export const GetWeather = () => {
  navigator.geolocation.getCurrentPosition(getCoords, error);
};

function getCoords(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  // setState with the position?

  fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then((response) => response.json())
    .then((data) =>
      //   setMapGrid({ gridID: data.gridID, gridX: data.gridX, gridY: data.gridY })
      {
        console.log(data);
      }
    );
  //put it in state
}

function error() {
  let errorMSG = "unable to retrieve your location.";
  console.log(errorMSG);
  return errorMSG;
}

const getPreviousWeather = () => {
  //   if (!weatherState) {
  //     getWeather();
  //     //   https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
  //   }
};

// Parsers for weather calls
// these will be on the server as well, and then they get called to the frontend?

const todaysWeather = () => {
  //   if (!weatherState) {
  //     getWeather();
  //   }
  //   return (
  //     <p>pip</p>
  //     //   temp
  //     //   chance of percip
  //     //   hourly data dawn to dusk
  //   );
};

const upcomingWeather = () => {
  //   if (!weatherState) {
  //     getWeather();
  //   }
  //   return (
  //     //   temp
  //     //   chance of percip
  //     <p>pip</p>
  //   );
};

const previousWeather = () => {
  //   if (!weatherState) {
  //     getPreviousWeather();
  //   }
  //   return (
  //     //   Date
  //     //   percip
  //     //   temp
  //     <p>pip</p>
  //   );
};
