import "normalize.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainBlock />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
