import styles from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={styles.Profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
