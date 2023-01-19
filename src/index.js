import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/pages/App";
import reportWebVitals from "./reportWebVitals";
import firebase from "./config/firebase";

console.log("config firebse ==> ", firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
