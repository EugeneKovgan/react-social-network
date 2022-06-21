import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className='App'>
      <Header />

      <div className='Main'>
        <div className='container'>
          <div className='main_container'>
            <Navbar />

            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              {/* <Route path='/profile' element={<Profile />} /> */}
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
