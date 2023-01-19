import React from 'react';
import Clothes from '../Fashion/Clothes';
import Mobile from '../Phones/Mobile';
import Electronic from '../Electronics/Electronic';
import Laptop from '../Laptops/Laptop';


function Topoffer() {
    return (
        <div>
           <Mobile />
           <Electronic />
           <Laptop />
           <Clothes />
        </div>
    );
}

export default Topoffer;