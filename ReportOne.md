# forageCalendar-React
A guide for assisting with foraging in RI.


## How this project benefit from React

There's a wide chasm between Bootstrap and React.
React is a library which provides an infrastructure for creating sights easily and quickly. At this point the core aspects of React feel grounded by JSX and the mentaility of working with components.

While Bootstrap has a similar goal to makigng web-development easier, Bootstrap is a framework. It is focused on mobile first design and defeinitly imposes an aesthetic agenda in terms of all the default styling.

React will allow for rendering large amounts of repetivitive content more easily through the link between JS and HTML in the form of JSX. The creation of re-usable compnonents will make creating pages more of a modular activit. Bootstrap provided a lot of quick default styling, but didn't contribute to the underlying structure of managing content. React will provide for more ease in iterating and loading content in a dynamic fashion.

## Expected List of React Components

### Navigation
This is the most resused aspect of the project, so it makes sense to create it as a component.
Feature of the component:
* A main nav bar
* a hamburger nav bar
* a breadcrumb/page title

### Individiual Plant Page
In my first iteration of the project I made a json file with the thought of dynamicaly loading descriptions, React components and passing in variables will allow for me to use this.

### Weather Status
This was an aspect of the project I didn't fully realize in the previous interation, but like the Navigation I would like to have a little weather report embedded on most pages.

### Modals
While these are not re-used as much as the nav, I have two types of modals which I re-use multiple times. In both cases I can build a base component and load in content. There are log-in modals and Warning modals.

### Map 
The map will eventually be used in two distinct ways: For disaplying public lands in the state and mapping locations of finds in the personal log. In both cases there will be accompanying sub-components for providing accompanying text with locations pinned on the map. 
Feature of the component:
* The map
* Park descriptions
* logbook description and dates

### Personal Log
This will be a couple of components with photo documentation, map pins, and notes. There will be components for users to input this info, and components for navigating and displaying it.
Feature of the component:
* Notes input
* Photo upload
* Photo Display
* Notes Display
* Map
* Map input

~~### Blog~~

### Calendar Display
This is the landing page and it has a couple of components it is comprised of The main large 
I think there will be different components for mobile and desktop versions.
Feature of the component:
* Main display circle of seasonal finds
* Look alike warning
* Other seasonal finds

### Data files
Accompanying many of these components will be both user generated data to load into the components and cire site data to load into the components.
Here's a list of the info that will get loading into components.
* Descriptions of plants/mushrooms
  * Binomial name
  * Colloquial names
  * Photos
  * description
    * characteristics
    * habitat
    * season
  * look alikes
  * edibility
  * cooking notes
  * warning flag
* Lists of public lands
  * long & lat
  * Website
* User logbook
  * Map pins
  * photos
  * notes
