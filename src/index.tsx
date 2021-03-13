import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configure_store";
import "./index.css";
import "leaflet/dist/leaflet.css";
//import App from "./components/App";
import Socket from "./components/Socket";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Socket />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
