
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
      ]
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
    if (action.type === 'ADD-POST') {
      let newPost = { id: 5, message: this._state.profilePages.newPostText, likes: 5 }
      this._state.profilePages.posts.push(newPost)
      this._state.profilePages.newPostText = ""
      this._callSubscriber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePages.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

export default store