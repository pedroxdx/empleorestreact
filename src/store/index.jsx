import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

// Reducers
import appReducer from "./reducers/appReducer";
import userReducer from "./reducers/userReducer";
import empleoReducer from "./reducers/empleoReducer";

// Persist Library
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfigUser = {
  key: "user",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const persistConfigEmpleo = {
  key: "empleo",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["formDataEmpleoBuscador"]
};

export const rootReducer = combineReducers({
  appReducer: appReducer,
  userReducer: persistReducer(persistConfigUser, userReducer),
  empleoReducer: persistReducer(persistConfigEmpleo, empleoReducer)
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

/*
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import appReducer from "./reducers/appReducer";
import userReducer from "./reducers/userReducer";
import empleoReducer from "./reducers/empleoReducer";

export const rootReducer = combineReducers({
  appReducer: appReducer,
  userReducer: userReducer,
  empleoReducer: empleoReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
*/
