import React from 'react'
import Home from "../src/component/pages/Home"
import About from "../src/component/pages/About"
import Contact from "../src/component/pages/Contact"
import Navbar from './component/layout/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from './component/pages/Error';
import AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import User from './component/user/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<About />} exact path='/about' />
            <Route element={<Contact />} exact path='/contact' />
            <Route element={<AddUser />} exact path='/user/add' />
            <Route element={<EditUser />} exact path='/user/edit/:id' />
            <Route element={<User />} exact path='/user/:id' />
            <Route element={<Error />} path='*' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
