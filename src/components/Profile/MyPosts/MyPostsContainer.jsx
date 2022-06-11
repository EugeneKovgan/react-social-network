import { addPostActionCreator, updateNewPostDateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostDateActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostElement={onPostChange}
      addPost={addPost}
      posts={state.profilePages.posts}
      newPostText={state.profilePages.newPostText}
    />
  );
};

export default MyPostsContainer;
