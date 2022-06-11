import { addPostActionCreator, updateNewPostDateActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          store.dispatch(updateNewPostDateActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostElement={onPostChange}
            addPost={addPost}
            posts={state.profilePages.posts}
            newPostText={state.profilePages.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
