import axios from "axios";

//const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
//const WEATHER_API = 'df6f7e4c49284fe3a50155520240804=Mumbai';

export const fetchWeatherData = async () => {
    const { data, status } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=df6f7e4c49284fe3a50155520240804&q=Mumbai`
    );
    if (status == 200) {
        return data.current;
    }
};