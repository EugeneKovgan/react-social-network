import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='App'>
      <Header />

      <div className='Main'>
        <div className='container'>
          <div className='main_container'>
            <Navbar />

            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/users' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
