import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, FormControl } from 'react-bootstrap';

const MyPosts = (props) => {
  const postsElement = props.posts.map((el) => <Post message={el.message} likes={el.likes} key={el.id} />);

  return (
    <div className={styles.MyPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <FormControl as='textarea' />
        </div>
        <div variant='buttons'>
          <Button variant='primary'>Add post</Button>
          <Button variant='primary'>Delete post</Button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
