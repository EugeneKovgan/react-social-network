import { InferActionsTypes } from './redux-store';

type DialogType = {
  id: number;
  name: string;
};

type MessagesType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andry' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Denis' },
    { id: 5, name: 'Valera' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi, ' },
    { id: 2, message: 'World' },
  ] as Array<MessagesType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessageBody: string) =>
    ({
      type: 'SN/DIALOGS/SEND-MESSAGE',
      newMessageBody,
    } as const),
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

export default dialogsReducer;
