// polyfill
import "babel-polyfill";

// react libraries
import * as React from "react";
import * as ReactDOM from "react-dom";

// component
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
