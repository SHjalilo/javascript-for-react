const API_KEY = '1324a913c1e64da6b61161441232505';
axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Laayoune&aqi=yes`)
.then(response => {
    console.log(response.data);
    let info = response.data;
    document.getElementById('api').innerHTML='';
        console.log(info.location.name);
        let content = `
            <div id="api">
                <p> City : ${info.location.name}</p>
                <p>  Temperature : ${info.current.temp_c}°C</p>
            </div>
        `;
        document.getElementById('api').innerHTML+=content;

});