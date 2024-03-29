import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
// import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import appReducer from './app-reducer';
import { ThunkAction } from 'redux-thunk';
import chatReducer from './chat-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  // form: formReducer,
  chat: chatReducer,
});

export type AppDispatch = typeof store.dispatch;

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

let store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store;

export default store;
