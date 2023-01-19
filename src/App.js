import React from 'react'
import Navbar from './components/pages/Nav/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/pages/Homes/Home'
import Login from './components/pages/LoginSignup/Login'
import Mobile from './components/pages/Phones/Mobile'
import Electronic from './components/pages/Electronics/Electronic'
import Clothes from './components/pages/Fashion/Clothes'
import Laptop from './components/pages/Laptops/Laptop'
import Beauty from './components/pages/BeautyAndMore/Beauty'
import Booking from './components/pages/Travel/Booking'
import Grocery from './components/pages/Grocery/Main'
import Topoffer from './components/pages/Offers/Topoffer'
import Cart from './components/pages/AddCart/Cart'
import Register from './components/pages/LoginSignup/Register'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
         
        </Route>
          <Route path='/topoffer' element={<Topoffer />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/electronic' element={<Electronic />}></Route>
          <Route path='/cloths' element={<Clothes />}></Route>
          <Route path='/laptop' element={<Laptop />}></Route>
          <Route path='/beauty' element={<Beauty />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/grocery' element={<Grocery />}></Route>
          <Route path='/mobile' element={<Mobile />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
