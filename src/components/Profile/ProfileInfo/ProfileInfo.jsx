import styles from './ProfileInfo.module.scss';
import bg_img from '../../../assets/img/bg-img.jpeg';
import avatar from '../../../assets/img/avatar.jpg';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    console.log(formData);
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={styles.ProfileInfo}>
      <div className={styles.img_container}>
        <img src={bg_img} alt='bg_img' />
      </div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || avatar} alt='img' />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}

        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <button onClick={goToEditMode}>edit</button>}
      <div>
        <b>Name:</b> {profile.fullName}
      </div>
      <div>
        <b>looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>lookingForAJobDescription:</b> {profile.lookingForAJobDescription ? 'yes' : 'no'}
        </div>
      )}
      <div>
        <b>contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contactsBlock}>
      <i>{contactTitle}:</i>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
