import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initializeStore } from "./initializeStore";
import App from "./web/App";

const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
