import React from 'react';
import HexaLaptop from './HexaLaptop';
function Laptop() {
    let laptopList = [
        {
            name: "MSI Bravo 15 Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX 5500M/144 Hz) Bravo 15 B5DD-410IN Gaming Laptop  (15.6 inch, Black, 2.35 kg kg)",
            price: "49,990",
            rating: "4.2",
            num: "1,792",
            review: 233,
            extra: 1500,
            off: "31%",
            url: "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/7/3/l/-original-imagha3pvvc2xuz2.jpeg?q=70",
        },
        {
            name: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
            price: "88,990",
            rating: "4.7",
            review: 752,
            num: "8,341",
            extra: 6000,
            off: "10%",
            url: "https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
        },
        {
            name: "DELL Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) Vostro 3420 Notebook  (14 inch, Carbon Black, 1.48 Kg, With MS Office)",
            price: "36,790",
            rating: "4.1",
            num: "87",
            review: 9,
            extra: 1436,
            off: "30%",
            url: "https://rukminim1.flixcart.com/image/416/416/l4x2rgw0/computer/m/n/n/vostro-3420-notebook-dell-original-imagfpq37h38xebf.jpeg?q=70"
        }

    ]
    return (
        <div>
            {
                laptopList.map(eachPhone => {
                    return (
                        <HexaLaptop laptop={eachPhone} />
                    );
                })
            }
        </div>
    );
}

export default Laptop;