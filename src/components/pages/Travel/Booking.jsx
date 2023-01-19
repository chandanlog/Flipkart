import React from 'react';
import Flight from './Flight';
function Booking(){
    let flightList=[
        {
            mum:"Mumbai,IN BOM",
            hyd:"Hyderabad, HYD",
            ban:"Bangkok, BKK",
            kua:"Kuala Lumpur",
            kol:"Kolkata, CCU",
            ben:"Bengaluru, BLR",
            che:"Chennai, MAA",
            dub:"Dubai, DXB",
            url:"https://rukminim1.flixcart.com/flap/1349/500/image/c21071267e38f50e.jpg?q=50",
            url1:"https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/ff6d92ed2b5e98aa.jpg?q=50",
            url2:"https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/5f30bd112c3cb821.jpg?q=50",
            url3:"https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d9055997b906be6c.jpg?q=50",
            url4:"https://rukminim1.flixcart.com/flap/1349/500/image/f895bd66f3c05773.jpg?q=50",
            url5:"https://rukminim1.flixcart.com/flap/449/450/image/f7f42741659c55ad.jpg?q=50",
            url6:"https://rukminim1.flixcart.com/flap/450/450/image/1f1821c967b4a82d.jpg?q=50",
            url7:"https://rukminim1.flixcart.com/flap/450/450/image/7d9a2b2f08a041da.jpg?q=50",
            url8:"https://rukminim1.flixcart.com/flap/449/450/image/cec0610bcafb74de.jpg?q=50",
            url9:"https://rukminim1.flixcart.com/flap/450/450/image/6a577510ce83f9f3.jpg?q=50",
            url10:"https://rukminim1.flixcart.com/flap/450/450/image/d1b2bd57bb0c2893.jpg?q=50",
            url11:"https://rukminim1.flixcart.com/flap/1349/500/image/3f941064267f1e52.jpg?q=50"
        }  
    ]
    return(
        <div>
            {
                flightList.map(eachFlight =>{
                    return(
                        <Flight booking={eachFlight}/>
                    );
                })
            }
        </div>
    );
}
export default Booking;