import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.Profile}>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePages.posts}
        newPostText={props.profilePages.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
