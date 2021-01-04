# RI Forage Calendar
A React.js fieldguide for seasonally foraging plants and mushrooms in RI.

### React Notes
* [Stack overflow note on setState and useState](https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re)
setState merges with existing state object, while useState rewrites the object altogether, which causes a re-render. This is why the spread operator `... someValue` is handy with hooks and merging into state.
