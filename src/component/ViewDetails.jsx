import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const spot = useLoaderData();

    return (
        <div className="bg-base-200 flex flex-col lg:flex-row gap-10 p-6">
            <div>
                <img className="rounded-xl" src={spot.photo} />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{spot.spot}</h2>
                <h2>Country: <span className="text-xl">{spot.country}</span></h2>
                <p>Seasonality: <span className="text-xl font-semibold">{spot.seasonality}</span></p>
                <p className="text-lg my-5">{spot.description}</p>

                <p>Total visitors per year: {spot.visitors}</p>
                <p className="text-lg font-semibold text-red-400 mt-2">Average Cost: {spot.cost} BDT</p>
                <p className="font-medium my-2">People can visit {spot.time} in a week</p>
                <p>Location: {spot.location}</p>
            </div>
        </div>
    );
};

export default ViewDetails;