const inputBox =  document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key = "8f74bd3bd958de726c5d527019f05e62";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data  =await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod==='404'){
     location_not_found.style.display = "flex";
     weather_body.style.display = "none";
     
        return;
       
    }
    else {
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";

    }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    // console.log(weather_data);
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
        case 'Drizzle':
            weather_img.src = "/images/drizzle.png";
            break;
        case 'Thunderstorm':
            weather_img.src = "/images/storm.png";
            break;
        case 'Dust':
            weather_img.src = "/images/dust.png";
            break;
        case 'Fog':
            weather_img.src = "/images/fog.png";
            break;
        case 'Haze':
            weather_img.src = "/images/haze.png";
            break;
        default:
                weather_img.src = "/images/404.png";
                break;
    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value)

})