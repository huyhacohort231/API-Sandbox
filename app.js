let url = `https://api.weather.com/v3/location/search?query=CA&locationType=adminDistrictCode&language=en-US&format=json&apiKey=83f647dd8d974191b647dd8d97c19154`


let getWeather = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => console.log(item));
}

// getWeather();

// &adminDistrictCode=CA

let url2 = `https://www.boredapi.com/api/activity?type=recreational`

let getActivity = () => {
    fetch(url2)
    .then(data => data.json())
    .then(item => document.getElementById('w-humidity').textContent = Object.values(item)[0]);
}

getActivity();