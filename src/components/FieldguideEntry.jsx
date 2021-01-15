import React from "react";
// import { mushrooms } from "../shared/mushroomIndex";

// "I got props from the link, and that populates me as?

function PhotoDisplay({ photo, photos }) {
  const toggleThumb = () => {
    console.log("i be big now");
  };
  const imgs = [...photos, photo]; //use this to map thumbnails.
  const thumbs = imgs.map((image) => {
    const url = image.split("/");

    // a differnt option, better bc no unnecessary array
    // const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
    // https://flaviocopes.com/how-to-get-last-item-path-javascript/

    const imgName = url[url.length - 2]; //retrieves the directory name for the specimen, which is the speciment name
    console.log(imgName);
    // slice the name to get evrything from the end until the slash
    return (
      <a onClick={toggleThumb}>
        {" "}
        {/*should this be a button?*/}
        <img src={image} alt={imgName} />
      </a>
    );
  });

  //circles growing up larger
  // name over scrim on image?
  //links again.

  return <div id="thumbs">{thumbs}</div>;
}

export default function FieldguideEntry({ specimen }) {
  return (
    <>
      <p>breadcrumbs fieldguide//{specimen.binomial}</p>
      <br />
      <h2>
        <i>{specimen.binomial}</i>
      </h2>
      <h3>{`Common Names: ${specimen.names.join(", ")}`}</h3>

      {/* <img src={specimen.photo} alt={`image of ${specimen.binomial}`} /> */}
      <PhotoDisplay photo={specimen.photo} photos={specimen.photos} />
      <h3>Charactersitics</h3>
      <p>{specimen.description.characteristics}</p>
      <p>{specimen.description.habitat}</p>
      {/* conditional for danger flag 
              
              */}
      <h3>Look Alikes</h3>
      {/* <PhotoDisplay photos={specimen.lookAlikes}/> */}
      <h3>Edibility: {specimen.edibility}</h3>
      <p>{specimen.cooking.notes}</p>
      <h4>Recipes</h4>
      <ul>{/* map the recipe links? */}</ul>
    </>
  );
}
