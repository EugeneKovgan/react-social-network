import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className='Main'>
          <div className='container'>
            <div className='main_container'>
              <Navbar />

              <Routes>
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
