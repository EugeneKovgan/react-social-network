import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'

const App = (props) => {

  return (

    <div className='App'>
      <Header />

      <div className='Main'>
        <div className='container'>
          <div className='main_container'>
            <Navbar />

            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
              <Route
                path='/profile'
                element={
                  <Profile store={props.store}
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
