import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import './Main.css';

const Main = () => {
  return (
    // <div className="container">
    <div className="Main">
      <div className="container">
        <div className="main-container">
          <Navbar />
          <Profile />
        </div>

      </div>
      {/* </div> */}
    </div>
  )
}
export default Main;