import styles from './Post.module.scss';
import { Image, Alert } from 'react-bootstrap';
import avatar from '../../../../assets/img/avatar.jpg';

const Post = (props) => {
  return (
    <Alert variant='success' className={styles.item}>
      <Image roundedCircle src={avatar} alt='avatar'></Image>
      {props.message}
      <p className={styles.likes}>Likes {props.likesCount}</p>
    </Alert>
  );
};

export default Post;
