import React from 'react'
import { Link } from "react-router-dom"
import "./Cart.css";
const Cart = () => {
    return (
        <div className='bg-light border'>
          <div className='div1 bg-white border'>
            <Link to="/"><span className='text-primary mt-2 text1 h5'>Flipkart</span></Link>
            <Link to="/Grocery"><span className='text-success h5'>Grocery</span></Link>
          </div>
          <div className='border bg-white mt-2 mb-4 imgage'>
            <img className='col-3 mt-4 rounded mx-auto d-block' src='https://rukminim1.flixcart.com/www/400/600/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='img'/>
            <h5 className='text-center mt-4'>Missing Cart items?</h5>
            <p className='text-center m-2'>Login to see the items you added previously</p>
            <Link to="/login"><button className='btn btn-danger mx-auto d-block'>Login</button></Link>
          </div>
        </div>
    )
}

export default Cart;