import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import { Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (

    <div className='App'>
      <Header />

      <div className='Main'>
        <div className='container'>
          <div className='main_container'>
            <Navbar />

            <Routes>
              <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPages} />} />
              <Route
                path='/profile'
                element={
                  <Profile
                    profilePages={props.state.profilePages}
                    dispatch={props.dispatch}
                  />
                }
              />
            </Routes>

          </div>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default App
