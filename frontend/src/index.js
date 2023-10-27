import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <div style={{backgroundColor:'rgb(8,25,39)'}}> */}
      {/* <div className='w-[70%] m-auto' style={{backgroundColor:'rgb(8,25,39)'}}> */}
      <Toaster />
      <App />
      {/* </div> */}
      {/* </div> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
