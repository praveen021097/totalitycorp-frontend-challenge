import {
    applyMiddleware,
    combineReducers,
    legacy_createStore,
    compose,
  } from "redux";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import thunk from "redux-thunk";
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({AuthReducer});

  const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
  export {store}