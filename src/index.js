import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { sendEmailReducer } from "../src/components/reducers/sendEmail.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(sendEmailReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
