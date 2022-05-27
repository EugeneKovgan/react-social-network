import styles from "./Profile.module.scss"
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      Profile
      <MyPosts />
    </div>
  )
}

export default Profile;