import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.scss';

const DialogItem = (props) => {
  return (
    <div className={styles.dialogsItems}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name} </NavLink>
    </div>
  );
};

export default DialogItem;
