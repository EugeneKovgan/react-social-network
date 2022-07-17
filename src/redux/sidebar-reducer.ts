import { type } from '@testing-library/user-event/dist/type';

let initialState = {};

type InitialState = typeof initialState;
const sidebarReducer = (state = initialState, action: any) => {
  return state;
};

export default sidebarReducer;
