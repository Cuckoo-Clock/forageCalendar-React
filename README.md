# RI Forage Calendar
A React.js fieldguide for seasonally foraging plants and mushrooms in RI.

### Code Resources
* [scroll-out](https://scroll-out.github.io/guide.html#tips-how-do-i), simple scroll event library.
* Styling form inputs is surprisingly difficult?
 * [Css tricks guide](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/)
 * [another guide](https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/#:~:text=The%20easiest%20way%20to%20select,to%20use%20CSS%20attribute%20selectors.&text=These%20selectors%20will%20select%20all,add%20classes%20to%20the%20elements.)
### React Notes

* [Get a good grip on all the possibilities of handling-events](https://reactjs.org/docs/handling-events.html)

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

* [Passing values into onclick](https://ozmoroz.com/2018/07/pass-value-to-onclick-react/) can be achieve through targeting the element or data-attributes.
* [DnD with React](https://engineering.datorama.com/mastering-drag-drop-with-reactjs-part-01-39bed3d40a03)

