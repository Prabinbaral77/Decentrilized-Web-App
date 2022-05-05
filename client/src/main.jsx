import React from "react";
import ReactDOM from "react-dom";
import { TransactionProviders } from "./context/TransactionContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <TransactionProviders>
    <App />
  </TransactionProviders>,
  document.getElementById("root")
);
