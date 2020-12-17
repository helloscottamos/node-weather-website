const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiaGVsbG9zY290dGFtb3MiLCJhIjoiY2tpb3BzbTFnMGtuYzJzbWwxdTdhN282byJ9.hoeV7gXoRT-tr4tPU5w3fA&limit=1"

    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to location services')
        }else if(body.features.length === 0){
            callback('No results found. Try another search')
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode