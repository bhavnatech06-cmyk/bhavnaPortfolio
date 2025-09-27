// https://api.openweathermap.org/data/2.5/weather?q=nashik&appid=b5038a7988afb1320036e0d602ba534f

const apiKey = "b5038a7988afb1320036e0d602ba534f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cloud =  '<i class="fa-solid fa-cloud"></i>';
const clear = '<i class="fa-solid fa-cloud-sun"></i>';
const rain = '<i class="fa-solid fa-cloud-rain"></i>';
const drizzle = '<i class="fa-solid fa-cloud-meatball"></i>';
const mist = '<i class="fa-solid fa-cloud-moon"></i>';

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds") {
    weatherIcon.innerHTML = cloud;
} else if(data.weather[0].main == "Clear") {
    weatherIcon.innerHTML = clear;
} else if(data.weather[0].main == "Rain") {
    weatherIcon.innerHTML = rain;
} else if(data.weather[0].main == "Drizzle") {
    weatherIcon.innerHTML = drizzle;
} else if(data.weather[0].main == "Mist") {
    weatherIcon.innerHTML = mist;
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

