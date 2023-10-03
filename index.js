//https://api.openweathermap.org/data/2.5/weather?q=parisa&appid=7102d93882b5f595c9d46eb042bd1cd3
getWeather("Angola");

// requete http vers l'api pour recuperer la meteo d'une ville
function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7102d93882b5f595c9d46eb042bd1cd3`)
        .then(response => {
            response.json()
                .then(data => {
                    
                    document.getElementById("city").textContent = data.name;
                    document.getElementById("icon").setAttribute("src", "https://openweathermap.org/img/wn/" +data.weather[0].icon + ".png");
                    document.getElementById("min").textContent = "Température min: "+Math.round(data.main.temp_min - 273.15)+" °C";
                    document.getElementById("real").textContent = "Température reelle: "+Math.round(data.main.temp - 273.15) +" °C";
                    document.getElementById("max").textContent = "Température max: "+Math.round(data.main.temp_max - 273.15) +" °C";
                })
                .catch(error => console.log(error));
        })
        .catch(error => {
            console.log(error);
    })
}

const FORM = document.getElementById("formCity");
// on recuperer la valeur du input
FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    // on recuperer la valeur du input
    let city = document.getElementById("ville").value;
    getWeather(city);
})
