const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bf94e6d5dfmshc12682ccdd81bf5p102eefjsn196c3c209368',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    cityname.innerHTML = city
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+ city;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        document.getElementById("temp_c").innerHTML = result.current.temp_c;
        document.getElementById("temp_c2").innerHTML = result.current.temp_c;
        //document.getElementById("temp_f").innerHTML = result.current.temp_f;
        //document.getElementById("is_day").innerHTML = result.current.is_day;
        document.getElementById("wind_mph").innerHTML = result.current.wind_mph;
        //document.getElementById("wind_kph").innerHTML = result.current.wind_kph;
        document.getElementById("wind_degree").innerHTML = result.current.wind_degree;
        document.getElementById("wind_dir").innerHTML = result.current.wind_dir;
        document.getElementById("pressure_mb").innerHTML = result.current.pressure_mb;
        //document.getElementById("pressure_in").innerHTML = result.current.pressure_in;
        document.getElementById("precip_mm").innerHTML = result.current.precip_mm;
        //document.getElementById("precip_in").innerHTML = result.current.precip_in;
        document.getElementById("humidity").innerHTML = result.current.humidity;
        document.getElementById("humidity2").innerHTML = result.current.humidity;
        document.getElementById("cloud").innerHTML = result.current.cloud;
        document.getElementById("feelslike_c").innerHTML = result.current.feelslike_c;
        //document.getElementById("feelslike_f").innerHTML = result.current.feelslike_f;
        document.getElementById("windchill_c").innerHTML = result.current.windchill_c;
        //document.getElementById("windchill_f").innerHTML = result.current.windchill_f;
        document.getElementById("heatindex_c").innerHTML = result.current.heatindex_c;
        document.getElementById("heatindex_c2").innerHTML = result.current.heatindex_c;
        //document.getElementById("heatindex_f").innerHTML = result.current.heatindex_f;
        document.getElementById("dewpoint_c").innerHTML = result.current.dewpoint_c;
        //document.getElementById("dewpoint_f").innerHTML = result.current.dewpoint_f;
        document.getElementById("vis_km").innerHTML = result.current.vis_km;
        //document.getElementById("vis_miles").innerHTML = result.current.vis_miles;
        document.getElementById("uv").innerHTML = result.current.uv;
        document.getElementById("gust_mph").innerHTML = result.current.gust_mph;
        //document.getElementById("gust_kph").innerHTML = result.current.gust_kph;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

// 👇 Automatically fetch weather for a default city

// 👇 Add event listener for search
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    const city = document.getElementById("city").value;
    getWeather(city);
});

getWeather("Delhi,India");
