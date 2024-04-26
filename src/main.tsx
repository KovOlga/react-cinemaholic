import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { initStore } from "./services/store.ts";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

export const store = initStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
