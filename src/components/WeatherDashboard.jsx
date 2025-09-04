// components/WeatherDashboard.jsx
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { weatherMap } from "../weatherMap";
import { getWeatherDescription } from "./getWeatherDescription";
import Weatherpanel from "./Weatherpanel";
import Hourlypanel from "./Hourlypanel";
import Dailypanel from "./Dailypanel";


const WeatherDashboard = () => {
    const { weather, isLoadingWeather} = useContext(SearchContext); 
    const currenthour = Number(new Date().getHours()); // calculates current hour for slicing the hourly weather data

    {/** loader animation during data fetch */}
    if (isLoadingWeather || !weather || !weather.current || !weather.hourly) { 
        return (
            <div className="flex justify-center items-center min-h-screen"> {/* Adjusted height for full-screen feel */}
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div> {/* Minimalistic spinner */}
            </div>
        );
    }

    {/** gets respective icon according to weather code from weathermap.js */}
    const currentIcon = weatherMap[weather.current.weather_code] || "wi wi-day-sunny-overcast";

    return (
        <div className={`flex flex-col md:flex-row p-6 `}>
            {/* panel Layout */}
            <div className=" md:w-1/3 md:h-[500px]  w-full ">
                {/* Side Panel */}
                <Weatherpanel weather={weather} currentIcon={currentIcon}/>

            </div>

            {/**hourly and daily panel layout */}
            <div className="flex flex-col  md:h-[500px] justify-between flex-1 mx-10  h-full gap-10">
                
                {/**gets styled description according to the weather */}
                <div >
                    {getWeatherDescription(weather.current.weather_code)}
                </div>

                {/* Hourly Forecast */}
                <Hourlypanel currenthour={currenthour} weather={weather} weatherMap={weatherMap}/>

                {/** daily forcast */}
                <Dailypanel  weather={weather} weatherMap={weatherMap}/>
            </div>


        </div>
    );
};

export default WeatherDashboard;