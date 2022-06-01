import styles from './ProfileInfo.module.scss';
import bg_img from '../../../assets/img/bg-img.jpeg';

const ProfileInfo = (props) => {
    return (
        <div className={styles.ProfileInfo}>
            <div className={styles.img_container}>
                <img src={bg_img} alt='bg_img' />
            </div>
            descriptions + ava
        </div>
    );
};

export default ProfileInfo;
