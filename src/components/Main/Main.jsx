import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import classes from './Main.module.scss';

const Main = () => {
  return (
    <div className={classes.Main}>
      <div className='container'>
        <div className={classes.main_container}>
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  )
}
export default Main;