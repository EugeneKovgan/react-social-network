import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hello, is's my first post", likesCount: '2' },
        { id: 2, message: "hello, is's my second post", likesCount: '12' },
        { id: 3, message: "hello, is's empty post", likesCount: '5' },
      ],
      newPostText: 'Message',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andry' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Denis' },
        { id: 5, name: 'Valera' },
      ],
      messages: [
        { id: 1, message: 'Hi, ' },
        { id: 2, message: 'World' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('changed state');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarReducer = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
