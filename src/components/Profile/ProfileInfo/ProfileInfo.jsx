import styles from "./ProfileInfo.module.css";
import photo from "../../../assets/img/avatar.jpg";

const ProfileInfo = (props) => {
  return (
    <div className={styles.ProfileInfo}>
      <img src={photo} alt="photo" />
      name + description
    </div>
  );
};

export default ProfileInfo;