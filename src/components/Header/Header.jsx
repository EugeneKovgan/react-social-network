import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        {/* <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img> */}
        <div className={styles.loginBlock}>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
      </div>
    </header>
  );
};

export default Header;
