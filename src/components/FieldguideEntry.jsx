import  React from "react";

// "I got props from the link, and that populates me as?


function PhotoDisplay({photo, photos}){ {/* spread operator them together*/}

    // a component to showcase grid thumbnails and have a enlarghed image
    //circles growing up larger
    // name over scrim on image?
    //links again.
    return(
        <>
        <p>pip</p>
        </>
    );
}


export default function FieldguideEntry({specimen}){
    
    return(
            
              <>
              <h2>binomial={specimen.binomial}</h2>
              <h3>Common Names={specimen.names}</h3>
              
              <img src={specimen.photo} alt={`image of ${specimen.binomial}`}/>
              {/* <PhotoDisplay photo={specimen.photo} photos={specimen.photos}/> */}
              <h3>Charactersitics</h3>
              <p>{specimen.description.characteristics}</p>
              <p>{specimen.description.habitat}</p>
              {/* conditional for danger flag 
              
              */}
              <h3>Look Alikes</h3>
              {/* <PhotoDisplay photos={specimen.lookAlikes}/> */}
              <h3>Edibility: {specimen.edibilty}</h3>
              <p>{specimen.cooking.notes}</p>
              <h4>Recipes</h4>
              <ul>
                  {/* map the recipe links? */}
              </ul>

              

              </>
          
    );
}