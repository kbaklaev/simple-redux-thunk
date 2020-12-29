import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { getPersonsReducer } from "./reducer";

export const store = createStore(
  getPersonsReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
