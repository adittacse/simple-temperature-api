// don't show api key here
const API_KEY = `27530ffbbaad131f7861880afdc1670c`;

const loadTemperarture = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    const temperature = document.getElementById("temperature");
    temperature.innerText = data.main.temp;
}

document.getElementById("btn-search").addEventListener("click", function() {
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    loadTemperarture(city);
});

loadTemperarture("dhaka");