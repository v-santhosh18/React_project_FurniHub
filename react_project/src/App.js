import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import '../src/assets/css/login.css';
import'../src/assets/css/about.css';
import'../src/assets/css/card1.css';
import'../src/assets/css/card2.css';
import'../src/assets/css/card3.css';
import'../src/assets/css/footer.css';
import'../src/assets/css/main.css';
import'../src/assets/css/navbar.css';

import Navbar from './components/navbar';
import Main from './components/main';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Card3 from './components/card3';
import About from './components/about';
import Footer from './components/footer';
import Store from './components/store';
// import Login from './components/login';
 import Signup from './components/signup';
function App() {
  return (
   <>
   <Router>
          <Routes>
              <Route path="/" element={<Store/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </Router>
   <signup/>
   </>

  );
}

export default App;
