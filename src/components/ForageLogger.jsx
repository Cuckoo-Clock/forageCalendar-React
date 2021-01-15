import React, { Component } from "react";
import { Control, LocalForm } from "react-redux-form";
import { GetWeather } from "../shared/weatherAPI";

import { publicLands } from "../shared/public_lands";
import { mushrooms } from "../shared/mushroomIndex";
// pull public lands & specimens from redux stores

const RenderChoices = ({ choices }) => {
  const options = choices.map((choice) => {
    return (
      <option
        key={choice.key}
        value={`${choice.name !== undefined ? choice.name : choice.binomial}`}
        style={{ backgroundImage: `url(${choice.photo})` }}
        // style="background-image:url(female.png);"
      >
        {choice.name !== undefined ? choice.name : choice.binomial}
        {/* some sorta conditinal for a photo choice? */}
      </option>
    );
  });
  return options;
};

export default class ForageLogger extends Component {
  constructor(props) {
    super(props);
    this.getDate = this.getDate.bind(this);
  }
  // to prep forsaving?
  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  getDate = () => {
    let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");

    return [month, day, year]; // `${month} ${day} ${year}`
  };

  render() {
    // function getImgData() {
    //   const files = chooseFile.files[0];
    //   if (files) {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(files);
    //     fileReader.addEventListener("load", function () {
    //       imgPreview.style.display = "block";
    //       imgPreview.innerHTML = '<img src="' + this.result + '" />';
    //     });
    //   }
    // }

    // // onchange of form call function above//
    // const chooseFile = document.getElementById("logphotos");
    // const imgPreview = document.getElementById("img-preview");

    // chooseFile.addEventListener("change", function () {
    //   getImgData();
    // });

    let [month, day, year] = this.getDate();
    // getWeather();
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <h3>{`${month} // ${day} // ${year}`}</h3>
        {/* {weather} */}
        {/* {map point} */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          {/* //some sorta formating */}
          <Control.select
            model=".location"
            id="location"
            name="location"
            placeholder="Location"
            className="form-control"
            // drop down if create new item, pop up text conditional add location
            //https://stackoverflow.com/questions/21468436/add-input-box-when-selecting-a-specific-option-into-select-drop-down
            //https://www.javascripttutorial.net/javascript-dom/javascript-add-remove-options/
          >
            <RenderChoices choices={publicLands} />
          </Control.select>
        </div>

        {/* alternatively there is a radio checkbox and scrolling overflow div */}
        <div className="form-group">
          <label htmlFor="forage-find">Forage Find</label>
          {/* //some sorta formating */}
          <Control.select
            model=".forage-find"
            id="forage-find"
            name="forage-find"
            placeholder="forage-find"
            className="form-control"
            // drop down if create new item, pop up text conditional add location
          >
            <RenderChoices choices={mushrooms} />
          </Control.select>
        </div>
        <div className="form-group">
          <label htmlFor="log-title">Log Title</label>
          {/* //some sorta formating */}
          <Control.text
            model=".log-title"
            id="log-title"
            name="log-title"
            placeholder="Log Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="log-notes">Log Notes</label>
          {/* //some sorta formating */}
          <Control.textarea
            rows="13"
            model=".log-notes"
            id="log-notes"
            name="log-notes"
            placeholder="Log Notes"
            className="form-control"
          />
        </div>
        <div>
          <div id="img-preview"></div>

          <label htmlFor="log-photos">Photos</label>
          <Control.file
            multiple
            // button
            accept="image/png, image/jpeg"
            model=".log-photos"
            id="log-photos"
            name="log-photos"
            className="form-control"
            capture="environment"
          />
          {/* some sorta conditional to show appended photos 
          
          https://codepen.io/mobifreaks/pen/LIbca
          https://w3collective.com/preview-selected-img-file-input-js/

          */}
        </div>

        <div className="form-group">
          <button type="submit">Save Log</button>
        </div>
      </LocalForm>
    );
  }
}

class ForagingLocations extends Component {
  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}></LocalForm>
    );
  }
}
