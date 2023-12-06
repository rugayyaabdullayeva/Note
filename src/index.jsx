import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import DataProvider from "./context/DataContex.jsx";
import GlobalProvider from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </DataProvider>
  </React.StrictMode>,
);
