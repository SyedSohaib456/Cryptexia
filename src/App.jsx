import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Exchange from "./components/Exchange";
import Home from './components/Home.jsx'
import Coins from "./components/Coins.jsx";
import CoinDetails from "./components/CoinDetails.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter basename="/Cryptexia">
         <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exchange" element={<Exchange/>} />
          <Route path="/coins" element={<Coins/>} />
          <Route path="/coin/:id" element={<CoinDetails />} />       
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
