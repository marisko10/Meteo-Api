const api = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=ecmwf_ifs";
let input = document.getElementById("CityInput");


async function app() {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

console.log(app());

 