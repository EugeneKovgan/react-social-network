import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button, FormControl } from "react-bootstrap";

const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => {
        return <Post message={post.message} likesCount={post.likesCount} />;
    });

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <FormControl
                        as="textarea"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div variant="success">
                    <Button variant="primary" onClick={onAddPost}>
                        Add post
                    </Button>
                    <Button variant="primary">Delete post</Button>
                </div>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
