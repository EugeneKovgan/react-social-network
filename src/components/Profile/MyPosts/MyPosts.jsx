import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, FormControl } from 'react-bootstrap';

const MyPosts = () => {
    const postsData = [
        { id: '1', message: 'hi', likes: '2' },
        { id: '2', message: 'hi how are you?', likes: '5' },
        { id: '3', message: 'im fine', likes: '21' },
    ];

    const postsElement = postsData.map((el) => <Post message={el.message} likes={el.likes} />);

    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <FormControl as='textarea' />
                </div>
                <div variant='success'>
                    <Button variant='primary'>Add post</Button>
                    <Button variant='primary'>Delete post</Button>
                </div>
            </div>
            <div className={styles.posts}>{postsElement}</div>
        </div>
    );
};

export default MyPosts;
