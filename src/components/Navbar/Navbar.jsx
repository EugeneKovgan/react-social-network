import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav defaultActiveKey='/home' className={styles.Navbar}>
      <ul>
        <li className={styles.item}>
          <NavLink to='/profile' activeClassName={styles.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/dialogs' activeClassName={styles.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/users' activeClassName={styles.activeLink}>
            Users
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/news' activeClassName={styles.activeLink}>
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/music' activeClassName={styles.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/login' activeClassName={styles.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
