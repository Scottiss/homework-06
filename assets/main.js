var apiKey = '04ca4740a12eec5578603b1b53763759';
var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#city-name');
var citiesListEl = document.querySelector('#cities-container ul');
var citySearchedEl = document.querySelector('#city-searched');
var currentWeatherContainerEl = document.querySelector('#current-weather-container');
var forecastContainerEl = document.querySelector('#forecast-container');
var clearBtn = document.querySelector('#clear-btn');

// retrieve search history
var cities = JSON.parse(localStorage.getItem('citiesSearched')) || [];

// variable for local day and time of city searched
var dtCitySearched;