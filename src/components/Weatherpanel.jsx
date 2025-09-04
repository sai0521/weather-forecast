import React from 'react'

const Weatherpanel = ({weather,currentIcon}) => {
    return (
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col justify-between items-center my-10 mx-10 h-full text-white">
            {/* Weather icon + temp */}
            <div className="flex flex-col items-center text-center pt-2">
                <i className={`${currentIcon} text-7xl md:text-9xl mb-4`}></i>
            </div>

            <h2 className=" text-7xl md:text-7xl font-bold">{weather.current.temperature_2m}°C</h2>

            {/* Weather details */}
            <div className="mt-8 w-full space-y-3 text-base">
                <p className="flex justify-between border-b border-white/20 pb-1">
                    <span>Feels Like</span>
                    <span>{weather.current.apparent_temperature}°C</span>
                </p>
                <p className="flex justify-between border-b border-white/20 pb-1">
                    <span>Humidity</span>
                    <span>
                        <i className="wi wi-raindrop text-2xl"></i>
                        <span>{weather.current.relative_humidity_2m}%</span>
                    </span>
                </p>
                <p className="flex justify-between border-b border-white/20 pb-1">
                    <span>Precipitation</span>
                    <span>
                        <i className=' wi wi-raindrops text-2xl'></i>
                        <span>{weather.current.precipitation} mm</span>
                    </span>
                </p>
                <p className="flex justify-between">
                    <span>Wind Speed</span>
                    <span>
                        <i className='wi -strong-wind text-yellow-400'></i>
                        <span>   {weather.current.wind_speed_10m} km/h</span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Weatherpanel
