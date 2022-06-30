import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, FormControl } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.myPostsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='new post' validate={[required, maxLength50]} />
      </div>
      <div variant='success'>
        <button>Add post</button>
        <button>Delete post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm);

export default MyPosts;
