const getWeather = async () => {
    const city = document.getElementById('city').value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '57b7825bb2mshd5815c0b3b174f0p1e3101jsn5cba862f1ce1',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        
        document.getElementById('result').innerHTML = `
            
            <div class="s"><h2>${result.location.name}, ${result.location.country}</h2>
            <p>Temperatura: ${result.current.temp_c}°C</p>
            <p>Holati: ${result.current.condition.text}</p></div>
            <img class="blut" src="${result.current.condition.icon}" alt="Icon">
        `;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerHTML = `<p>Xato yuz berdi. Iltimos, qayta urinib ko'ring.</p>`;
    }
}