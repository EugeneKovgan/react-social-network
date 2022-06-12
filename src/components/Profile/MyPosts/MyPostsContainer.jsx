import { addPostActionCreator, updateNewPostDateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

const mapStateToProps = (state) => {
  return { posts: state.profilePages.posts, newPostText: state.profilePages.newPostText };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostElement: (text) => {
      dispatch(updateNewPostDateActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
