const SEND_MESSAGE = 'SEND-MESSAGE';

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

export type InitialState = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

type SendMessageCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
