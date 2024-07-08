import { useLoaderData } from "react-router-dom";

const CountrySpot = () => {
    const spots = useLoaderData();

    return (
        <div>
            <h3 className="text-center text-2xl mb-8">Some famous Tourist spot of {spots.country_name} :</h3>
        <div className="grid gap-6 justify-center">
            
            <div className="card bg-base-100  border-4 border-orange-200">
                <div className="card-body flex lg:flex-row md:flex-col flex-col lg:gap-10">
                    <div>
                        <h2>Tourists Spot : <span className="text-2xl font-medium">{spots.tourist_spots[0].tourist_spot_name}</span></h2>
                        <h2>Country : <span className="text-lg ">{spots.tourist_spots[0].country_name}</span></h2>
                        <p>Description : {spots.tourist_spots[0].short_description}</p>
                    </div>
                    <div>
                        <h2>Location : <span className="font-semibold">{spots.tourist_spots[0].location}</span></h2>
                        <p>Average Cost : <span className="text-lg text-green-600 font-medium">{spots.tourist_spots[0].average_cost}</span></p>
                        <p>Seasonality : <span className="font-medium">{spots.tourist_spots[0].seasonality}</span></p>
                    </div>
                </div>

                <div className="card-actions justify-center mb-4">
                    <button className="btn">View details</button>
                </div>
            </div>

            <div className="card bg-base-100  border-4 border-blue-200">
                <div className="card-body flex lg:flex-row md:flex-col flex-col lg:gap-10">
                   
                    <div>
                        <h2>Tourists Spot : <span className="text-2xl font-medium">{spots.tourist_spots[1].tourist_spot_name}</span></h2>
                        <h2>Country : <span className="text-lg ">{spots.tourist_spots[1].country_name}</span></h2>
                        <p>Description : {spots.tourist_spots[1].short_description}</p>
                    </div>
                    <div>
                        <h2>Location : <span className="font-semibold">{spots.tourist_spots[1].location}</span></h2>
                        <p>Average Cost : <span className="text-lg text-green-600 font-medium">{spots.tourist_spots[1].average_cost}</span></p>
                        <p>Seasonality : <span className="font-medium">{spots.tourist_spots[1].seasonality}</span></p>
                    </div>
                </div>

                <div className="card-actions justify-center mb-4">
                    <button className="btn">View details</button>
                </div>
            </div>

            <div className="card bg-base-100  border-4 border-red-200">
                <div className="card-body flex lg:flex-row md:flex-col flex-col lg:gap-10">
                   
                    <div>
                        <h2>Tourists Spot : <span className="text-2xl font-medium">{spots.tourist_spots[2].tourist_spot_name}</span></h2>
                        <h2>Country : <span className="text-lg ">{spots.tourist_spots[2].country_name}</span></h2>
                        <p>Description : {spots.tourist_spots[2].short_description}</p>
                    </div>
                    <div>
                        <h2>Location : <span className="font-semibold">{spots.tourist_spots[2].location}</span></h2>
                        <p>Average Cost : <span className="text-lg text-green-600 font-medium">{spots.tourist_spots[2].average_cost}</span></p>
                        <p>Seasonality : <span className="font-medium">{spots.tourist_spots[2].seasonality}</span></p>
                    </div>
                </div>

                <div className="card-actions justify-center mb-4">
                    <button className="btn">View details</button>
                </div>
            </div>

            <div className="card bg-base-100  border-4 border-stone-400">
                <div className="card-body flex lg:flex-row md:flex-col flex-col lg:gap-10">
                   
                    <div>
                        <h2>Tourists Spot : <span className="text-2xl font-medium">{spots.tourist_spots[3].tourist_spot_name}</span></h2>
                        <h2>Country : <span className="text-lg ">{spots.tourist_spots[3].country_name}</span></h2>
                        <p>Description : {spots.tourist_spots[3].short_description}</p>
                    </div>
                    <div>
                        <h2>Location : <span className="font-semibold">{spots.tourist_spots[3].location}</span></h2>
                        <p>Average Cost : <span className="text-lg text-green-600 font-medium">{spots.tourist_spots[3].average_cost}</span></p>
                        <p>Seasonality : <span className="font-medium">{spots.tourist_spots[3].seasonality}</span></p>
                    </div>
                </div>

                <div className="card-actions justify-center mb-4">
                    <button className="btn">View details</button>
                </div>
            </div>

            <div className="card bg-base-100  border-4 border-fuchsia-300">
                <div className="card-body flex lg:flex-row md:flex-col flex-col lg:gap-10">
                   
                    <div>
                        <h2>Tourists Spot : <span className="text-2xl font-medium">{spots.tourist_spots[4].tourist_spot_name}</span></h2>
                        <h2>Country : <span className="text-lg ">{spots.tourist_spots[4].country_name}</span></h2>
                        <p>Description : {spots.tourist_spots[4].short_description}</p>
                    </div>
                    <div>
                        <h2>Location : <span className="font-semibold">{spots.tourist_spots[4].location}</span></h2>
                        <p>Average Cost : <span className="text-lg text-green-600 font-medium">{spots.tourist_spots[4].average_cost}</span></p>
                        <p>Seasonality : <span className="font-medium">{spots.tourist_spots[4].seasonality}</span></p>
                    </div>
                </div>

                <div className="card-actions justify-center mb-4">
                    <button className="btn">View details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CountrySpot;