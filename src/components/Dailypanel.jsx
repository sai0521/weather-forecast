import React from 'react'

const Dailypanel = ({weather,weatherMap}) => {
    return (
        <div className="flex flex-col gap-5 text-white">

            <h3 className="text-xl font-semibold ">Daily Forcast</h3> {/** heading */}

            <div className="flex gap-4 overflow-x-auto justify-between">

                {/** takes only 5 days from current day */}
                {weather.daily.time.slice(1,6).map((t, i) => {

                    const icon = weatherMap[weather.daily.weather_code[i]] || "wi wi-day-sunny-overcast";// add icon fo every days weather according to temperature

                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center text-2xl justify-center bg-white/20 backdrop-blur-lg rounded-xl p-3 min-w-[150px] min-h-[150px] shadow"
                        >
                            <p className=" font-semibold text-white-600">

                                {/** names first days as tomorow and, remaining will be setes their respective dates */}
                                {i==0 ? "Tomorrow": new Date(t).toLocaleDateString([], { weekday:'long'})}
                            </p>

                            <i className={`${icon} text-3xl my-2 text-white-500`}></i>{/** weather icon */}

                            <p className="font-semibold">{weather.daily.temperature_2m_max[i]}°</p>{/** temperature */}
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Dailypanel
