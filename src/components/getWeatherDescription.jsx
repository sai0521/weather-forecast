export const getWeatherDescription = (code) => {
  const descriptions = [
    {
      check: code === 0,
      title: "Clear",
      subtitle: "Sunny Skies",
      desc: "Mild temperatures with clear skies throughout the day. Perfect for outdoor activities. Winds remain calm with little to no chance of rain.",
      color: "text-grey-200",
    },
    {
      check: code >= 1 && code <= 3,
      title: "Partly Cloudy",
      subtitle: "Shifting Skies",
      desc: "A mix of sunshine and clouds with comfortable temperatures. Gentle winds and no major weather disruptions expected.",
      color: "text-blue-500",
    },
    {
      check: code === 45 || code === 48,
      title: "Foggy",
      subtitle: "Low Visibility",
      desc: "Dense fog patches reducing visibility. Drive carefully and allow extra travel time. Conditions expected to clear gradually.",
      color: "text-gray-300",
    },
    {
      check: code >= 51 && code <= 55,
      title: "Drizzle",
      subtitle: "Light Rainfall",
      desc: "Light drizzle expected throughout the day. Roads may be slippery, so caution is advised. A raincoat or umbrella is recommended.",
      color: "text-yellow-100",
    },
    {
      check: code >= 61 && code <= 65,
      title: "Rainy",
      subtitle: "Showers Expected",
      desc: "Light to moderate rainfall throughout the day. Carry an umbrella. Winds may pick up slightly, making it feel cooler.",
      color: "text-yellow-300",
    },
    {
      check: code >= 66 && code <= 67,
      title: "Freezing Rain",
      subtitle: "Icy Showers",
      desc: "Cold rain with freezing conditions. Surfaces may become icy and slippery. Travel with caution.",
      color: "text-blue-200",
    },
    {
      check: code >= 71 && code <= 77,
      title: "Snowy",
      subtitle: "Winter Chill",
      desc: "Snowfall expected. Bundle up warmly, and be prepared for slippery roads. Outdoor activities may be affected.",
      color: "text-blue",
    },
    {
      check: code >= 80 && code <= 82,
      title: "Showers",
      subtitle: "Scattered Rain",
      desc: "Intermittent rain showers expected through the day. Keep an umbrella handy as conditions may change quickly.",
      color: "text-yellow-400",
    },
    {
      check: code >= 95 && code <= 99,
      title: "Stormy",
      subtitle: "Thunderstorms",
      desc: "Thunderstorms likely with heavy rain, lightning, and gusty winds. It is safest to stay indoors during these conditions.",
      color: "text-white-300",
    },
  ];

  const match =
    descriptions.find((d) => d.check) || {
      title: "Weather Update",
      subtitle: "Changing Conditions",
      desc: "Variable weather patterns today. Stay updated on local forecasts and be prepared for sudden changes.",
      color: "text-gray-200",
    };

  return (
    <div className="flex flex-col items-start md:items-end space-y-2 text-left md:text-right">
      <h2 className="text-5xl font-semibold text-white">{match.title}</h2>
      <h3 className={`text-3xl font-semibold ${match.color}`}>{match.subtitle}</h3>
      <p className="text-base text-gray-100 max-w-md">{match.desc}</p>
    </div>
  );
};
