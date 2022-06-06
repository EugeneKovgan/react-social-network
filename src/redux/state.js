
let rerenderEntireTree = () => {
  console.log('state changed')
}

const state = {
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
}

export const addPost = () => {
  let newPost = { id: 5, message: state.profilePages.newPostText, likes: 5 }
  state.profilePages.posts.push(newPost)
  state.profilePages.newPostText = ""
  rerenderEntireTree(state)
}

export const updateNewPost = (newText) => {
  state.profilePages.newPostText = newText
  rerenderEntireTree(state)
}

export const subscriber = (observer) => { rerenderEntireTree = observer }

export default state