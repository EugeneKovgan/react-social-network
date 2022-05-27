import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { Button, FormControl } from "react-bootstrap";

const MyPosts = () => {

  return (
    <div className={styles.myPostsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <FormControl
            as="textarea"
          />
        </div>
        <div variant="success">
          <Button variant="primary" >
            Add post
          </Button>
          <Button variant="primary">Delete post</Button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message='hi' />
        <Post message='hi how are you?' />
        <Post message='im fine' />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
