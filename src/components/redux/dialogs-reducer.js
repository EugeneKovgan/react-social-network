const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Dima_2" },
    { id: 3, name: "Dima_3" },
    { id: 4, name: "Dima_4" },
    { id: 5, name: "Dima_5" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Dima_3" },
    { id: 4, message: "Dima_4" },
    { id: 5, message: "Dima_5" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageBody = [...state.newMessageBody];
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_NEW_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageBody = [...state.newMessageBody];
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = "";
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_NEW_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});

export default dialogsReducer;
