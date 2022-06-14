// import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.items_list}>
        <li className={styles.item}>
          <NavLink to='/profile' className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/dialogs' className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/music' className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/settings' className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Settings
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/users' className={(navData) => (navData.isActive ? styles.active : styles.item)}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
