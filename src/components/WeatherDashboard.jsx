// components/WeatherDashboard.jsx
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { weatherMap } from "../weatherMap";
import { getWeatherDescription } from "./getWeatherDescription";
import Weatherpanel from "./Weatherpanel";
import Hourlypanel from "./Hourlypanel";
import Dailypanel from "./Dailypanel";


const WeatherDashboard = () => {
    const { weather, isLoadingWeather,err} = useContext(SearchContext); // Added isLoadingWeather
    const currenthour = Number(new Date().getHours());

    if (weather === null) {
        return <div className="flex justify-center items-center min-h-screen text-6xl text-white-500">Error loading weather data. Please try again later.</div>;
    }

    if (isLoadingWeather || !weather || !weather.current || !weather.hourly) { // Updated to include isLoadingWeather
        return (
            <div className="flex justify-center items-center min-h-screen"> {/* Adjusted height for full-screen feel */}
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div> {/* Minimalistic spinner */}
            </div>
        );
    }
    const currentIcon = weatherMap[weather.current.weather_code] || "wi wi-day-sunny-overcast";
    // console.log(weather.hourly.time[currenthour])
    // console.log(weather.hourly.time.slice(currenthour, currenthour+6))


    return (
        <div className={`flex flex-col md:flex-row  {getBackgroundClass(weather.current.weather_code)} p-6 `}>
            {/* Main Layout */}
            <div className=" md:w-1/3 md:h-[500px]  w-full ">
                {/* Side Panel */}
                <Weatherpanel weather={weather} currentIcon={currentIcon}/>

            </div>

            <div className="flex flex-col  md:h-[500px] justify-between flex-1 mx-10  h-full gap-10">
                
                <div >
                    {getWeatherDescription(weather.current.weather_code)}
                </div>
                {/* Hourly Forecast */}
                <Hourlypanel currenthour={currenthour} weather={weather} weatherMap={weatherMap}/>
                <Dailypanel  weather={weather} weatherMap={weatherMap}/>
            </div>


        </div>
    );
};

export default WeatherDashboard;