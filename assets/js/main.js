        if (navigator.geolocation) 
        {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);         
        } 
        function successFunction(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=5b0e1bd4d251c987ccdcdc29ce35e7e8&lang=de&units=metric`)
            .then(response => response.json())
            .then(json => {
        console.log(json)
        json.forEach((key)=>{
                key.name
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key.name}&appid=4763a236642a3b3d555b025bfccd6444&lang=de&units=metric`)
    .then(response => response.json())
    .then(json => {
        result.innerHTML += `
        <div>
            <h1>${json.name}</h1>
            <p>${json.weather[0].description}</p>
            <p>Aktuelle Temp: ${json.main.temp}°C</p>
            <p>Min Temp: ${json.main.temp_min}°C</p>
            <p>Max Temp: ${json.main.temp_max}°C</p>
        </div>`
        })})})};
    
        function errorFunction(){
        console.log("ERROR")
        }