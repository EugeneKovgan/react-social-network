// import profileReducer, { actions } from './profile-reducer';
// import { ProfileType } from '../types/types';

// let state = {
//   posts: [
//     {
//       id: 1,
//       message: "hello, it's my first post",
//       likesCount: '2',
//     },
//     {
//       id: 2,
//       message: "hello, it's my second post",
//       likesCount: '12',
//     },
//     {
//       id: 3,
//       message: "hello, it's my empty post",
//       likesCount: '5',
//     },
//   ],
//   profile: null,
//   status: '',
//   newPostText: '',
// };

// it('new post added', () => {
//   let action = actions.addPostActionCreator('test message');

//   let newState = profileReducer(state, action);
//   expect(newState.posts.length).toBe(4);
// });

// if (
//   ('deleted message',
//   () => {
//     let action = actions.deletePost(1);
//     let newState = profileReducer(state, action);
//     expect(newState.posts.length).toBe(3);
//   })
// );
