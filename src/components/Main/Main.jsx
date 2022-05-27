import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.Main}>
      <div className='container'>
        <div className={styles.main_container}>
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  )
}
export default Main;