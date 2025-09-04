import React from 'react'

const Hourlypanel = ({currenthour,weather,weatherMap}) => {
    return (
        <div className="flex flex-col gap-5 text-white">
            <h3 className="text-xl font-semibold ">Hourly Forcast</h3>
            <div className="flex gap-4 overflow-x-auto ">
                {weather.hourly.time.slice(currenthour, currenthour + 8).map((t, i) => {
                    const icon = weatherMap[weather.hourly.weather_code[i]] ||"wi wi-day-sunny-overcast";
                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-xl p-3 min-w-[100px] shadow"
                        >
                            <p className="text-sm text-white-600">
                                {new Date(t).toLocaleTimeString([], { hour: "2-digit" })}
                            </p>
                            <i className={`${icon} text-3xl my-2 text-white-500`}></i>
                            <p className="font-semibold">{weather.hourly.temperature_2m[i]}°C</p>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Hourlypanel
