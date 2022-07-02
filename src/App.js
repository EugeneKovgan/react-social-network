import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='App'>
        <HeaderContainer />

        <div className='Main'>
          <div className='container'>
            <div className='main_container'>
              <Navbar />

              <Routes>
                <Route path='/dialogs' element={<DialogsContainer />} />

                <Route path='/profile/*' element={<ProfileContainer />} />
                <Route path='/users' element={<UsersContainer />} />

                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />

                {/* <Route path='/settings' element={<Settings />} /> */}

                <Route path='/login' element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
// export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
