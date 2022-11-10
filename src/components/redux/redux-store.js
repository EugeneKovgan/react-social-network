// import { combineReducers, createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
