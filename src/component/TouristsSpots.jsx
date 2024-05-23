import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristsSpots = () => {

    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/spot')
        .then(res => res.json())
        .then(data => setSpots(data))
    },[]);


    return (
        <div>
            <div className="flex flex-row justify-around mt-20 mb-8">
                <h2 className="lg:text-3xl md:text-2xl text-xl"></h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    spots.map(spot => <div key={spot._id} >
                        <div className="card w-96 bg-base-100 shadow-xl p-8 space-y-4">
                            <figure className=""><img src={`${spot.photo}`} className="rounded-xl"/></figure>
                            <h2 className="text-2xl font-semibold">{spot.spot}</h2>
                            <p className="text-lg">{spot.description.slice(0, 90)} ....more</p>
                            <p className="text-center text-lg font-semibold text-red-400">Average Cost: {spot.cost} BDT</p>
                            <div className="text-center">
                              <Link to={`/estateDetails/${spot._id}`}><button className="btn btn-primary">View details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;