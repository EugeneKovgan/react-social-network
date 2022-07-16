import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialState = {
  initialized: boolean;
};
let initialState: InitialState = {
  initialized: false,
  // globalError: null,
};

const appReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitializeSuccessType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializeSuccess = (): InitializeSuccessType => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializeSuccess());
  });
};

export default appReducer;
