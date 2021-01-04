# RI Forage Calendar
A React.js fieldguide for seasonally foraging plants and mushrooms in RI.

### React Notes
* [Stack overflow note on setState and useState](https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re)
setState merges with existing state object, while useState rewrites the object altogether, which causes a re-render. This is why the spread operator `... someValue` is handy with hooks and merging into state.
* Object destructuring ![object destructuring syntax](https://dmitripavlutin.com/static/c6d9d0af2d1b6e8d0c88dad3f41f55f4/7842b/javascript-object-destructuring-infographic-2.png) Default value is of note in case property isn't present
  * [further on dynamic name](https://dmitripavlutin.com/javascript-object-destructuring/):  
  > You can extract to variables properties with a dynamic name (the property name is known at runtime):
  >
  > const { [propName]: identifier } = expression;
  > propName expression should evaluate to a property name (usually a string), and the identifier should indicate the variable name created after the destructuring. 
  > The second expression should evaluate to the object you’d like to destructure.
  >
  > An equivalent code without object destructuring:
  >
  > const identifier = expression[propName];
  > Let’s look at an example where prop holds the property name:
  >
  > const hero = {
  >  name: 'Batman',
  >  realName: 'Bruce Wayne'
  > };
  >
  > const prop = 'name';
  > const { [prop]: name } = hero;
  > name; // => 'Batman'
  > const { [prop]: name } = hero is an object destructuring that assigns to variable name the value hero[prop], where prop is a variable holding the property name.`
