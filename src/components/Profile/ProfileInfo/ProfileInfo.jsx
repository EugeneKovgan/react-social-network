import styles from "./ProfileInfo.module.css";
import photo from "../../../assets/img/avatar.jpg";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>
    return (
        <div className={styles.ProfileInfo}>
            <img src={props.profile.photos.small ? props.profile.photos.small : photo} alt="photo"/>
            <div className={styles.infoblock}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.contacts.facebook}</p>
                <p>id: {props.profile.userId}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;