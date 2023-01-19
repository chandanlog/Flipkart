import React from 'react';
import './Flight.css';
import Carousel from 'react-bootstrap/Carousel';


function Flight(props) {
    let today = new Date().toLocaleDateString('en-us', { weekday: "short", month: "short" })

    return (
        <div>
            <div>
                <div>Only Space</div>
                <span>Only Space</span>
                <div>
                    <img className='background' src='https://rukminim1.flixcart.com/www/2666/2666/promos/06/01/2021/276bd352-f8b3-49cf-87e9-c853e6dbd5ac.jpg?q=50' alt='backgrund' />
                </div>
            </div>
            <div className='bg-white rounded border p-4 col-10 search'>
                <span className='pb-4'>
                    <input type="radio" class="m-1" name="TypeList" readonly="" id="ROUND_TRIP" /><span>Own Way</span>
                    <input type="radio" class=" m-2" name="TypeList" readonly="" id="ROUND_TRIP" /><span>Round Trip</span>
                </span>
                <div>
                    <span>
                        <select class="p-2 mt-2 col-3 border btn-sm text-left">
                            <option selected disabled>Form</option>
                            <option value="1">{props.booking.mum}</option>
                            <option value="2">{props.booking.hyd}</option>
                            <option value="3">{props.booking.ban}</option>
                            <option value="4">{props.booking.kua}</option>
                            <option value="5">{props.booking.kol}</option>
                            <option value="6">{props.booking.ben}</option>
                            <option value="7">{props.booking.che}</option>
                            <option value="8">{props.booking.dub}</option>
                            <div class="first second"></div>
                        </select>

                    </span>
                    <span>
                        <select class="p-2 ml-3 col-3 border btn-sm text-left">
                            <option selected disabled>To</option>
                            <option value="1">{props.booking.mum}</option>
                            <option value="2">{props.booking.hyd}</option>
                            <option value="3">{props.booking.ban}</option>
                            <option value="4">{props.booking.kua}</option>
                            <option value="5">{props.booking.kol}</option>
                            <option value="6">{props.booking.ben}</option>
                            <option value="7">{props.booking.che}</option>
                            <option value="8">{props.booking.dub}</option>
                        </select>
                    </span>
                    <span>
                        <input className='p-1 pr-2  mt-2 ml-1 col-1 border' type="text" value={today} placeholder='Depart on' />
                    </span>
                    <span>
                        <input className='p-1 mt-2 ml-1 col-1 border' type="text" value={today} placeholder='Return on' />
                    </span>
                    <span>
                        <input className='p-1 mt-2 ml-1 border' type="text" placeholder='Travellars | class' />
                    </span>
                    <span>
                        <button className='btn btn-primary p-2 '>Search</button>
                    </span>
                </div>
            </div>
            <div>
                <img className='mt-2' src={props.booking.url} alt='img' />
            </div>
            <Carousel className='border'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.booking.url1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.booking.url2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.booking.url3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <img src={props.booking.url4} alt='img' />
            </div>
            <div>
                <img src={props.booking.url5} alt='img' />
                <img src={props.booking.url6} alt='img' />
                <img src={props.booking.url7} alt='img' />
            </div>
            <div>
                <img src={props.booking.url8} alt='img' />
                <img src={props.booking.url9} alt='img' />
                <img src={props.booking.url10} alt='img' />
            </div>
            <div>
                <img src={props.booking.url11} alt='img' />
            </div>
        </div>
    );
}

export default Flight;