import './App.css';
import React, { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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
              <Suspense fallback={Preloader}>
                <Routes>
                  {/* <Route path='/' element={<Navigate to='/profile' />} /> */}
                  <Route path='/dialogs' element={<DialogsContainer />} />

                  <Route path='/profile/*' element={<ProfileContainer />} />
                  <Route path='/users' element={<UsersContainer />} />

                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />

                  {/* <Route path='/settings' element={<Settings />} /> */}
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='*' element={<div>404 not found</div>} />
                </Routes>
              </Suspense>
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
