import React from 'react';
import { Link } from "react-router-dom"

function HexaLaptop(props) {
    return (
        <div>
            <div className='pt-4'>
                <div className='review pt-2'>
                    <div className='text-primary h5 mt-1'>{props.laptop.name}</div>
                    <span className='bg-success p-1 rounded'>{props.laptop.rating}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt='img' /></span>
                    <span className='bg-white'>{props.laptop.num} Ratings&nbsp;</span>
                    <span>&amp;</span>
                    <span>&nbsp;{props.laptop.review} Reviews </span>
                    <span><img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt='img' /></span>
                    <div className=' pt-1'>
                        <span className='text-success'>Extra ₹{props.laptop.extra} off</span>
                        <h4>₹{props.laptop.price}<span className='text-success h6'> {props.laptop.off} off</span></h4>
                        <div>
                            <p className='h5'>Available offers</p>
                            <div><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" alt='img' />
                                <span className='h5'> Bank Offer</span><span> 10% off on SBI Credit Card, up to ₹1,250, on orders of ₹5000 and above</span><span class="text-primary"> T&amp;C</span>
                            </div>
                            <div><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" alt='img' />
                                <span className='h5'> Bank Offer</span><span> 10% off on SBI Credit Card EMI Transactions, up to ₹2,000, on orders of ₹5000 and above</span><span class="text-primary"> T&amp;C</span>
                            </div>
                            <div><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" alt='img' />
                                <span className='h5'> Bank Offer</span><span> Additional ₹750 discount on SBI Credit Card and EMI txns on net cart value of INR 29,999 and above</span><span class="text-primary"> T&amp;C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-3 image'>
                <img className='img border m-2 p-2' src={props.laptop.url} height={150} width={230} alt='relame' />
                <div>
                    <Link to="/cart"><button className='btn btn-warning btn-sm'>ADD TO CART</button></Link>
                    <button className='btn btn-danger btn-sm'>BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default HexaLaptop;