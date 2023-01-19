import React, { useState,useEffect } from 'react';

// function Beauty() {
//     return (
//         <div>
//             <div className='iphone m-2 pl-3'>
//                 <span>Samsung Washing Machine (White, 128 GB)</span>
//             </div>
//             <div className='col-3'>
//                 <img className='img border m-2'src='https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70' alt='iphone'/>
//                 <div>
//                     <button className='btn btn-warning btn-sm'>ADD TO CART</button>
//                     <button className='btn btn-danger btn-sm'>BUY NOW</button>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Beauty;

function Beauty() {
    const [color, setColor] = useState();
    const [count, setCount] = useState(1);
        useEffect(()=>{
            setTimeout(() => {
                setCount((count) => count+1)

                },1000);
            });

    return (
        <div className='m-2'>
            <span className='text-primary head h5'>.</span>
            <div className='review pt-2'></div>
            <div className='mt-4'>
                <h1 className='mt-4'>My favorite color is {color}!</h1>
                <button className='btn btn-primary' type='button' onClick={() => setColor("blue")}>Blue</button>
                <button className='btn btn-yellow' type='button' onClick={() => setColor("yellow")}>Yellow</button>
                <button className='btn btn-pink' type='button' onClick={() => setColor("pink")}>Pink</button>
                <button className='btn btn-success' type='button' onClick={() => setColor("green")}>Green</button>
                <button className='btn btn-danger' type='button' onClick={() => setColor("red")}>Red</button>
            </div>
            <div>
                <h1>I've rendered {count} times!</h1>;
            </div>
        </div>

    );

}
export default Beauty;