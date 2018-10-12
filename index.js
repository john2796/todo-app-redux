import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// for applying multiple middleware you need compose
// middleware is how you can add all those debugging tools like logger
import { createStore, compose } from "redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store";

const store = createStore(
  reducer,
  compose(
    // applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
