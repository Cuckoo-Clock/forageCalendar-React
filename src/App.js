import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

import Main from "./components/Main";

//bring the mushrooms into state at this level.
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
