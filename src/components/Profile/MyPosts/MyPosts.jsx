import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, FormControl } from 'react-bootstrap';

const MyPosts = (props) => {
  const postsElement = props.posts.map((el) => <Post message={el.message} likes={el.likes} key={el.id} />);
  let ref = React.createRef();
  let addPost = () => {
    props.addPost();
    props.updateNewPost('');
  };
  let onPostChange = () => {
    let text = ref.current.value;
    props.updateNewPost(text);
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
