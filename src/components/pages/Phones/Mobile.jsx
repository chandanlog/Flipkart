import React from 'react';
import Phone from './Phone';
function Mobile() {
    let phoneList = [
        {
            name: "SAMSUNG Galaxy S21 FE 5G (Olive, 128 GB)  (8 GB RAM)",
            price: "38,000",
            rating: "4.2",
            num: "1,188",
            review: 169,
            extra: 1500,
            off: "45%",
            url: "https://rukminim1.flixcart.com/image/312/312/l30hmkw0/mobile/w/j/o/galaxy-s21-fe-5g-sm-g990ewziinu-samsung-original-image8dzwv3bch4k.jpeg?q=70",
        },
        {
            name: "APPLE iPhone 11 (White, 128 GB)",
            price: "88,000",
            rating: "4.5",
            review: 139,
            num: "1,568",
            extra: 2800,
            off: "34%",
            url: "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
        },
        {
            name: "Realme 9i (Prism Black, 128 GB)  (4 GB RAM)",
            price: "11,499",
            rating: "4.1",
            num: "1,088",
            review: 128,
            extra: 1100,
            off: "28%",
            url: "https://rukminim1.flixcart.com/image/416/416/ky90scw0/mobile/m/r/u/-original-imagagnffruu7ptd.jpeg?q=70",
        }

    ]
    return (
        <div>
            {
                phoneList.map(eachPhone => {
                    return (
                        <Phone phone={eachPhone} />
                    );
                })
            }
        </div>
    );
}

export default Mobile;