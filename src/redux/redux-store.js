import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './user-reducer';

let reducers = combineReducers({
  profilePages: profileReducer,
  dialogsPages: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
