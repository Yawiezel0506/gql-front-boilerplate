import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import OpenMassage from "./warModal/OpenMassage.tsx";
import { store } from "./context/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <OpenMassage/>
      <App />
    </React.Fragment>
  </Provider>
);
