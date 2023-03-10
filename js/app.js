// don't show api key here
const API_KEY = `27530ffbbaad131f7861880afdc1670c`;

const loadTemperarture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    setInnerTextById("temperature", data.main.temp);
    setInnerTextById("condition", data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById("btn-search").addEventListener("click", function() {
    // get city
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    loadTemperarture(city);
    
    // set city
    document.getElementById("city").innerText = city.charAt(0).toUpperCase() + city.slice(1);
    searchField.value = "";
});

loadTemperarture("dhaka");