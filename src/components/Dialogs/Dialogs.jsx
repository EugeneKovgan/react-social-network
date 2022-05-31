import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/1'>Eugene</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Eugene 2</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'>Eugene 3</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'>Eugene 4</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>hello </div>
                <div className={styles.message}>how are you?</div>
            </div>
        </div>
    );
};

export default Dialogs;
