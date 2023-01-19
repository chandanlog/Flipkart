import React from 'react';
import { Link } from "react-router-dom"
function Grocery() {
    return (
        <div className='position-absoulte pt-4'>
            <div className='bg-success p-2 fixed-top'>
                <div className='text-center col-12'>
                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/grocery-logo_fb537a.svg' alt='img' width={76} />
                    <span className='text-white'><input className='ml-4 pr-4' type="text" autocomplete="off" placeholder="Search grocery products" /><svg width="12" height="16" viewBox="0 0 9 12" class="ml-4" xmlns="http://www.w3.org/2000/svg"><path fill="#2874f0" class="_2xEPr8" d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" fill-rule="evenodd"></path></svg> Select city <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2Dwidy"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_1O_n_j"></path></svg></span>
                    <Link to="/login"><button className='btn btn-white text-success btn-sm ml-4'> Login</button></Link>
                    <span className='text-white ml-4'> More<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2Dwidy"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_1O_n_j"></path></svg></span>
                    <a class="_3SkBxJ ml-4" href="/viewcart?exploreMode=true&amp;preference=GROCERY"><svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg><span className='text-white ml-2'>Cart</span></a>
                    <img className='ml-4' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk_goto_home_logo_small_5b9cdd.svg' alt='img' />
                    <Link to="/"><span className='ml-3'><img className='rounded' src='https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-home-button-web-icon-green-home-button-web-icon-green-118056549.jpg' alt='img' width={28} /></span></Link>
                </div>
            </div>
            <div className='m-3 pt-4'><br></br>
                <p>Whether you work from home or office or other workplaces, daily<b> grocery</b> items are a requisite for everybody. Regardless of the size of the family or where you live, one can easily browse for the required food or other daily use products and have them brought to your home. Explore the variety of products, whether oils or foodgrains, from the online stock and choose the quantity required. You can save the time otherwise lost in waiting in lengthy queues for billing and payments by easily adding the chosen items to your cart online. Select the required date for delivery and pay with a suitable payment option. This will help you receive the items whenever you need them and in the available quantity. Essentials needed every day, like<a href="/grocery/staples/masalas-spices/whole-spices/pr?sid=73z%2Cbpe%2Ca6m%2C021&amp;marketplace=GROCERY"> spices</a>, <a href="/grocery/staples/dals-pulses/pr?sid=73z%2Cbpe%2C3uv&amp;marketplace=GROCERY">daals</a>, sugar, coffee powder, salt, etc., can be easily shopped online and delivered to your home. Other items like cleaning liquids, shower gels, fabric softeners, toothpaste, etc., can also be bought online. Buy grocery and more from brands such as Kellogg’s, Tata Gold, Parle G, Lays, etc. Order the <b>online grocery </b>comfortably from home for timely doorstep delivery. You may also place an order for the comfort and convenience of your loved ones who cannot move out of the house and shop.&nbsp;<span>The information you are reading has been last updated on 19-Oct-22.</span></p>
            </div>
            <div>
                <img className='col-12' src='https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/edd9d83a489e98e4.jpg?q=80' alt='img' />
                <img className='col-12' src='https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/2b3e3ed1104b66b5.jpg?q=80' alt='img' />
                <img className='col-12' src='https://rukminim1.flixcart.com/fk-p-flap/2666/575/image/9da1851b850479d9.jpg?q=50' alt='img' />
                <div className='bg1'>
                    <div>
                        <h3 className='text-white text-center'><b>Steal Deals And More For You</b></h3>
                        <div className='card col-3'>
                            <div>
                                <div className='form p-2 width-100 text-info h5'>Shop for ₹1000 to get discount</div>
                                <img className='pt-4' src='https://rukminim1.flixcart.com/image/100/100/ktbu6q80/incense-stick/g/l/d/incense-sticks-flipkart-supermart-home-essentials-original-imag6pcpax7ge6z8.jpeg?q=100' alt='img' />
                                <div className='grocery1'>
                                    <div>Flipkart Supermart Ho...</div>
                                    <span></span>
                                    <h3>₹1</h3>
                                    <p>Current Price :₹17</p>
                                    <button className='btn btn-outline text-primary btn-md mt-2'>Add item</button>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
                <img className='col-12' src='https://rukminim1.flixcart.com/flap/1800/1800/image/c1ab7707a6a9bbd9.jpg?q=80' alt='img' />
            </div>
            <div className='border p-2 ml-4 bg'>
                <h2>Featured Brands</h2>
                <img className='p-4 ml-4' src='https://rukminim1.flixcart.com/fk-p-flap/1312/704/image/0074d688695bbcca.jpeg?q=70' width={400} alt='img' />
                <img className='p-4 ml-4' src='https://rukminim1.flixcart.com/fk-p-flap/1312/704/image/038d2bd94acafaf8.jpeg?q=70' width={400} alt='img' />
                <img className='p-4 ml-4' src='https://rukminim1.flixcart.com/fk-p-flap/656/352/image/bcbb8728c5c135cb.jpeg?q=70' width={400} alt='img' />
            </div>
        </div>
    );
}

export default Grocery;