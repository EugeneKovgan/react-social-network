import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePages: {
      posts: [
        { id: '1', message: 'hi', likes: '2' },
        { id: '2', message: 'hi how are you?', likes: '5' },
        { id: '3', message: 'im fine', likes: '21' },
      ],
      newPostText: 'new text from state'
    },
    dialogsPages: {
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
    }, sidebar: { friends: '1' }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscriber(observer) { this._callSubscriber = observer },

  dispatch(action) {
    this._state.profilePages = profileReducer(this._state.profilePages, action)
    this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}


export default store