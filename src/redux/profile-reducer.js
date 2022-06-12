const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: '1', message: 'hi', likes: '2' },
    { id: '2', message: 'hi how are you?', likes: '5' },
    { id: '3', message: 'im fine', likes: '21' },
  ],
  newPostText: 'new text from state'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 5, message: state.newPostText, likes: 5 }
      return { ...state, posts: [...state.posts, newPost], newPostText: "" }
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }
    }
    default: return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostDateActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer