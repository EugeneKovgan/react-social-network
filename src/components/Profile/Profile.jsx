import styles from './Profile.module.scss';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={styles.Profile}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
