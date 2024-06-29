'use strict';

const api_key ="3118e474a7e8108b5f9b6b3be1b8791d";

/**
 * Fetch data from server
 * @param {string} URL API url 
 * @param {Function} callback callback
 */ 

export const fetchData = function(URL, callback)
{
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data=> callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
    },
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
};
