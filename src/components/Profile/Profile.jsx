import MyPostsContainer from './MyPosts/MyPostsContainer';
import styles from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
