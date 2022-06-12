const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: '1', name: 'Eugene' },
    { id: '2', name: 'Eugene 2' },
    { id: '3', name: 'Eugene 3' },
    { id: '4', name: 'Eugene 4' },
    { id: '5', name: 'Eugene 5' },
  ],
  messages: [
    { id: '1', message: 'hi' },
    { id: '2', message: 'hello' },
    { id: '3', message: 'how are you?' },
    { id: '4', message: 'hi' },
  ], newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody
      return {
        ...state, newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body, likes: 6 }]
      }
    }
    default: return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer