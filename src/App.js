
import React from 'react';

// import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavbarMain from './components/subcom/NAVBAR';
import NavbarJobs from './components/pages/jobs/NAVBAR_jobs';
import Home from './components/pages/home';
import Search from './components/pages/search';
import About from './components/pages/about';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Footer from './components/subcom/FOOTER';


function App() {
  
  return (

    <div className="App">
       

    <BrowserRouter>
    <div>
      <header>
      {/* <NavbarJobs /> */}
      <NavbarMain />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      </header>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
