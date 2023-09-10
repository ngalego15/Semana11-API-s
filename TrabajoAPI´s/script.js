function consultarCalidadAire() {
    const latitud = 35; 
    const longitud = 58; 
    const apiKey = '13081a48dbc7023ace6a3baf72658dc6';

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${apiKey}`;

    // Realizar la solicitud HTTP GET usando fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Procesar los datos de la respuesta
            const aqi = data['list'][0]['main']['aqi'];
            const resultadoContainer = document.getElementById('resultado');
            resultadoContainer.innerHTML = `Índice de Calidad del Aire: ${aqi}`;
        })
        .catch(error => {
            console.error('Error en la solicitud a la API:', error);
        });
    }