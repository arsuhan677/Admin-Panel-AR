import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"; // মূল App component
// import "./index.css"; // যদি CSS থাকে

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
