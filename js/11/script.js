const button = document.getElementById('get-location-button')

async function getData(lat , long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=e7deba4379f54049837195323241904&q=${lat},${long}&aqi=yes`)
     return await promise.json()
    }

 async function gotLocation(position){
const resutl= await getData(position.coords.latitude, position.coords.longitude)
console.log(resutl)
}

function failedToGet(){
    console.log('Failed to get location')
}


button.addEventListener('click', async ()=> {
 navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
})
