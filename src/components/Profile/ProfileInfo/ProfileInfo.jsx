import styles from './ProfileInfo.module.scss';
import bg_img from '../../../assets/img/bg-img.jpeg';
import avatar from '../../../assets/img/avatar.jpg';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={styles.ProfileInfo}>
      {/* <div className={styles.img_container}>
        <img src={bg_img} alt='bg_img' />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || avatar} alt='img' />
        {/* <input type={'file'} onChange={onMainPhotoSelected} /> */}
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
      descriptions + ava
    </div>
  );
};

export default ProfileInfo;
