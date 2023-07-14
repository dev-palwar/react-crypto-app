import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar';
import Exchange from './Components/Exchange';
import Coins from './Components/Coins';
import Home from './Components/Home';
import Coin_details from './Components/Coin_details';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/exchange' element={< Exchange/>}/>
          <Route path='/coins' element={< Coins />}/>
          <Route path='/coin/:id/:currencySymbol/:currency' element={< Coin_details />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
