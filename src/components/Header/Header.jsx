import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.loginBlock}>
          {props.isAuth ? (
            <div className={styles.headerBlock}>
              {props.login}
              <button className={styles.headerBtn} onClick={props.logout}>
                logout
              </button>
            </div>
          ) : (
            <div className={styles.headerBlock}>
              <NavLink to={'/login'}>Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
