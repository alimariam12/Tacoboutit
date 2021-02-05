// const axios = require('axios'); 
// const apiKey = "70lW2AgJHTp_q-hxkDB9XkiOW3zxKNqqrQF8N2nD5z8h0P9qjkWBDlBREwBS4Y1pJCoNbYA8y0x0eSqfJiUhouudWStjjD1kNi-m1ou4arOfCYg_IfNwWo-zAascYHYx";



function searcRestaurant(restaurant) {
    // let search = req.params.search;    
    return {
    
        "async": true,
        "crossDomain": true,
        "url": "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972",
        "method": "GET",
        "headers": {
            "authorization": "Bearer fsKdcEujDDbI3J_tzmwHmcRA-Z_H6nfnCEMawFDdwdv3CFxiI7hozxAkbX69fPUoG0aU0x6ZwFksGZ98d4E2afBc38WyqJwvgfWkLJeG9lHxIh7lolLM2VBVK6scYHYx",
            // "Cache-Control": "no-cache",
        }
    }
        // "data": {
        //     "term": "Restaurants",
        //     // "accessToken": "<REQUIRED>",
        //     "latitude": 46.392410,
        //     "longitude": -94.636230
        // }
}
        // .then((response) => {
        //     console.log(response.data);
        //     return res.json(response.data)

        // })
        // .catch((error) => {
        //     return res.json(error)
        // })

