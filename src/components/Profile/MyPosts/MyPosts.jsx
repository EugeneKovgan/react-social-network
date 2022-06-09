import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, FormControl } from 'react-bootstrap';
import { addPostActionCreator, updateNewPostDateActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  const postsElement = props.posts.map((el) => <Post message={el.message} likes={el.likes} key={el.id} />);
  let ref = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = ref.current.value;
    props.dispatch(updateNewPostDateActionCreator(text));
  };

  return (
    <div className={styles.MyPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <FormControl as='textarea' ref={ref} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={styles.buttons}>
          <Button onClick={addPost} variant='primary'>
            Add post
          </Button>
          <Button variant='primary'>Delete post</Button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
