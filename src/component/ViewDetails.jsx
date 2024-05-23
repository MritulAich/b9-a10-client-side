import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const spots = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const spot = spots.find(e => e.id === idInt);


    return (
        <div className="bg-base-200 flex flex-col lg:flex-row gap-10 p-6">
            <div>
                <img className="rounded-xl" src={spot.photo} />
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold">{spot.spot}</h2>
                <h2>Country: <span className="text-xl">{spot.country}</span></h2>
                <p>Seasonality: <span className="text-xl font-semibold">{spot.seasonality}</span></p>
                <p className="text-lg mt-4">{spot.description.slice(0, 90)}</p>
                <p className="text-lg">{spot.description.slice(90, 190)}</p>
                <p className="text-lg mb-5">{spot.description.slice(190, 300)}</p>

                <div className="bg-base-100 rounded-xl p-5 mr-[250px]">
                    <p className="text-xl font-bold text-lime-500 mb-2">{spot.cost}</p>
                    <p className="font-medium">People can visit {spot.time} in a week</p>
                    <p>Location: {spot.location}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;