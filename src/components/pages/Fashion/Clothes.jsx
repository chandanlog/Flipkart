import React from 'react';
import Shirts from './Shirts';

function Clothes() {  
    let shirtList = [
        {
            name: "Roadster, Metronaut & amp",
            price: "599",
            rating: "4.2",
            num: "1,088",
            review: 139,
            extra: 500,
            off: "35%",
            url: "https://rukminim1.flixcart.com/image/150/150/xif0q/jacket/h/r/f/s-12178124-roadster-original-imag3z2p3yk5wnvp-bb.jpeg?q=70"
        },
        {
            name: "Wrogn Men Slim Fit Checkered Casual Shirt",
            price: "1,399",
            rating: "4.1",
            num: "1,288",
            review: 169,
            extra: 600,
            off: "42%",
            url: "https://rukminim1.flixcart.com/image/150/150/xif0q/shirt/o/j/3/-original-imagg5rzr4vka28w.jpeg?q=70"
        },
        {
            name: "Wrogn Men Slim Fit Printed Spread Collar Casual Shirt",
            price: "1,218",
            rating: "4.1",
            num: "19",
            review: 159,
            extra: 400,
            off: "47%",
            url: "https://rukminim1.flixcart.com/image/150/150/xif0q/jean/s/e/x/-original-imaggd7zvhj9ygmz.jpeg?q=70"
        }
    ]
    return (
        <div>
            {
                shirtList.map(eachShirt =>{
                    return(
                        <Shirts shirt={eachShirt}/>
                    )
                })
            }
        </div>
    );
}

export default Clothes;