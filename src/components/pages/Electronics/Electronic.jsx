import React from 'react';
import Tv from './Tv';

function Electronic() {
    let tvList = [
        {
            name: "Mi X Series 125 cm (50 inch) Ultra HD (4K) LED Smart Android TV ",
            price: "58,999",
            rating: "4.4",
            num: "1,588",
            review: 169,
            extra: 6091,
            off: "38%",
            url: "https://rukminim1.flixcart.com/image/312/312/xif0q/television/l/d/q/-original-imaggsnkparsege3.jpeg?q=70"
        },
        {
            name: "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV",
            price: "15,999",
            rating: "4.3",
            num: "1,32,398",
            review: "12,212",
            extra: 500,
            off: "27%",
            url: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
        },
        {
            name: "Nokia 127 cm (50 inch) Ultra HD 4K LED Smart Android TV with Sound by JBL ",
            price: "42,999",
            rating: "4.3",
            num: "35,26",
            review: 580,
            extra: 500,
            off: "29%",
            url: "https://rukminim1.flixcart.com/image/416/416/ku1k4280/television/g/x/z/50uhdadndt52x-nokia-original-imag79br4zfyw83q.jpeg?q=70",
        }
        

    ]
    return (
        <div>
            {
                tvList.map(eachTv => {
                    return (
                        <Tv tv={eachTv} /> 
                    );
                })
            }
        </div>
    );
}

export default Electronic;