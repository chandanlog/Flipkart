import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <>
            <aside>
                <div className='body'>
                    <Link to="/topoffer">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100" alt="" />
                    </Link>
                    <Link to="/mobile">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100" alt="" />
                    </Link>
                    <Link to="/electronic">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100" alt="" />
                    </Link>
                    <Link to="/cloths">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100" alt="" />
                    </Link>
                    <Link to="/laptop">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100" alt="" />
                    </Link>
                    <Link to="/beauty">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100" alt="" />
                    </Link>
                    <Link to="/booking">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100" alt="" />
                    </Link>
                    <Link to="/grocery">
                        <img className='pl-4 m-2' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100" alt="" />
                    </Link>
                    <Carousel className='border'>
                        <Carousel.Item>
                        <Link to="/mobile"><img
                                className="d-block w-100"
                                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/376f073cdfd3e8c0.jpg?q=50"
                                alt="Second slide"
                            /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/electronic"><img
                                className="d-block w-100"
                                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c6346cd58d79b988.jpg?q=50"
                                alt="Second slide"
                            /></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/mobile"><img
                                className="d-block w-100"
                                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6bd47b2bdcdc710c.jpg?q=50"
                                alt="Third slide"
                            /></Link>
                        </Carousel.Item>
                    </Carousel>
                    <div className='bg'>
                        <img className='col-12 pt-2' src='https://rukminim1.flixcart.com/fk-p-flap/2666/230/image/724373442ad5fdec.jpg?q=50' alt='img' width={400} height={80} />
                    </div>
                </div>
                <div className='one1 col-15 m-2 bg'>
                    <Link to="/mobile">
                        <img className='m-1' src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/75da8a58e1c733b4.jpg?q=50" alt='img' width={436} />
                    </Link>
                    <Link to="/laptop">
                        <img className='m-1' src='https://rukminim1.flixcart.com/fk-p-flap/480/480/image/1a65269c0531543f.jpg?q=50' alt='img' width={436} />
                    </Link>
                    <Link to="/electronic">
                        <img className='m-1' src='https://rukminim1.flixcart.com/fk-p-flap/480/480/image/fb498608d58ef585.jpg?q=50' alt='img' width={436} />
                    </Link>
                </div>
            </aside>
            <div>
                <Outlet />
            </div>

        </>
    )
}

export default Home