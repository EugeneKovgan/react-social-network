import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={styles.Profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;
