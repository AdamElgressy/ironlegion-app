import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LatLngTuple } from "leaflet";
import Map from "./components/Map";
import reportWebVitals from "./reportWebVitals";
import "leaflet/dist/leaflet.css";

const AzrieliPos: LatLngTuple = [32.07, 34.79];

ReactDOM.render(
  <React.StrictMode>
    <Map pos={AzrieliPos} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
