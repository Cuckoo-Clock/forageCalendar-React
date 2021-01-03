# Introduction

The RI Foraging Calendar provides 2 main features: a seasonal field guide to wild plants & mushrooms and a logbook where users can document notes, photos, and locations from their foraging. The Seasonal Field Guide will be one Dataset consisting of recipes, photos, notes on habitat, descriptions, and warnings. This will be a static source, called upon to populate individual field guide pages and parts of the landing page. The dataset can be updated with new entries for maintaining and growing the application, but it won't be altered by user interations. The logbook will be entirely written by the user, updated by submiting text, imgs, and location data in the form of Longitude and Latitude, I utilized Leaflet.js as a map api, and the MDN geoLocation() method, one thing to think about is the permissions it asks for.
    
Additionaly there are List of Foraging Resources, Public Lands, as well as notes on best practices. This is also static content, though last time I also created arrays of lists for the resource links and Public lands, which can be used with this React app as well.

# User Interface Design and Prototype

[Here's a link to my figma mock up](https://www.figma.com/file/BFYyoJnBJlD7sh3y5kPFSC/Mushroom-Forage-Calendar?node-id=0%3A1), it is still in process.

# Navigation Structure

[Landing page/Calendar presentation of Fieldguide selections]  <=entry point
    [Field Guide Individual Specimen] <= various choices from entry point page, seasonal changed
    [NavBar] <= present at all locations in the tree below
        [Calendar]<= back to the top entry point
        [Fieldguide browse]
            [Fieldguide individual Specimens]
                [Links to other related specimens]
        [Public Lands]
            [interactive map]
            [links offsite]
        [Other resources]
            [links offsite]
        [Logbook]
            [Map]
            [directory of previous logs]
                [individual log entries]
            [Add logs]
                [text]
                [photo upload]
                [location entry]
            
# References

## Cookies?

I want to allow people to save their GDPR choice as well as their permissions for allowing their location to be found. I think cookies is the way this is done? But how are cookies done?
* [react-cookie](https://www.npmjs.com/package/react-cookie) - an npm package.
* [universal-cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie)- another package/repo.
* [W3 page of js cookies](https://www.w3schools.com/js/js_cookies.asp)

## Material Design

I would like to attempt to adopt [Material Design Components](https://material.io/resources) for the project as opposed to Reactstrap.  

## Some notes on how people hold their phones

from [UX matters](https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php)
We also need to avoid having misses cause problems, so accept the fact that failures, mistakes, and imprecision exist. Account for mistakes by placing dangerous or unrelated items far from other items, thus eliminating or reducing the consequences of accidental taps.
[Also these 10 heuristics for UX design are worth considering for the mobile development.](https://www.uxmatters.com/mt/archives/2017/07/design-for-fingers-touch-and-people-part-3.php)

a way to think of a hierarchy of interaction

    selectable rows with arrows to the right—These items load other pages or more details.
    underlined text—These items load additional, helpful information inline.
    buttons—These submit data or change state.

## Weather & Location 

[Using fetch for a weather app](https://bithacker.dev/fetch-weather-openweathermap-api-javascript)
[A simple weather JSON parsing app](https://medium.com/swlh/a-simple-javascript-weather-application-and-json-parsing-abd21ff0ea9a)
[OPen weather API](https://openweathermap.org/appid)
[National weather service weather api](https://www.weather.gov/documentation/services-web-api)
[Geolocation api](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
