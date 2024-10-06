import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    console.log(weatherData);
    const [travelMessage, setTravelMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45e57863a0fc0cf3e7e6b4b5237907c5&units=metric`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("City not found");
                }
                return res.json();
            })
            .then((data) => {
                setWeatherData(data);
                if(data.main.temp >= 35){
                    setTravelMessage(`Maybe it's not the right time to travel ${data.name}`)
                }else{
                    setTravelMessage(`Perfect time to travel ${data.name}`)
                }
            })
            .catch((error) => toast.error('City not found'));
    };


    return (
        <div className="bg-blue-100 border-2 border-b-gray-400 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Check Destination Weather</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Get Weather
                </button>
            </form>
            {
                weatherData ? <>
                    <h2 className="font-bold text-center my-2 underline">{weatherData.name}</h2>
                    <p>Temperature: <span className="font-semibold text-lg text-orange-600">{weatherData.main.temp}°C</span></p>
                    <p>Description: <span className="font-semibold">{weatherData.weather[0].description}</span></p>
                    <p>Feels like: <span className="font-semibold">{weatherData.main.feels_like}°C</span></p>
                    <p>Humidity: <span className="font-semibold">{weatherData.main.humidity}%</span></p>
                    <p>Wind speed: <span className="font-semibold">{weatherData.wind.speed}m/s</span></p>
                </>
                    : <p></p>
            }
            <p className="mt-2">{travelMessage}</p>

            <ToastContainer />
        </div>
    );
};

export default Weather;
