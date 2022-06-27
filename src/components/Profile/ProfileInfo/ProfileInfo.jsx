import styles from './ProfileInfo.module.scss';
import bg_img from '../../../assets/img/bg-img.jpeg';
import avatar from '../../../assets/img/avatar.jpg';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import { updateStatus } from '../../../redux/profile-reducer';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.ProfileInfo}>
      {/* <div className={styles.img_container}>
        <img src={bg_img} alt='bg_img' />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt='img'></img>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        {/* <img src={props.profile.photos.large} alt='img'></img>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.contacts.github}</div> */}
      </div>
      descriptions + ava
    </div>
  );
};

export default ProfileInfo;
