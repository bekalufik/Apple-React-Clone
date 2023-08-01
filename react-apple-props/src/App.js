import React, { Component } from 'react'
import Header from "./components/HeaderComponents/Header";
import Home from './Home';
import Footer from "./components/footerComponents/Footer";
import { Route, Routes } from 'react-router-dom';
import Iphone from "./Pages/Iphone/Iphone"
import SingleAppleProduct from './Pages/Productpage/SingleAppleProduct';
import Four04 from "./Pages/Four04/Four04"
import './App.css'
class App extends Component {

  render() {
    return (

      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<SingleAppleProduct />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;



