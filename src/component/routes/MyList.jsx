import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddedSpot from "./AddedSpot";

const MyList = () => {

    const loadSpots = useLoaderData();
    const [spots, setSpots] = useState(loadSpots);

    return (
        <div className='m-20'>
            <h1 className='text-6xl text-center my-20'></h1>

            <div>
                <table className="table ">
                <thead>
                        <tr className="text-lg">
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Average Cost</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                { spots.map(spot => 
                    <tbody key={spot._id}>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>{spot.spot}</th>
                            <td>{spot.country}</td>
                            <td>{spot.cost}</td>
                            <td><div className="btn btn-accent">Update</div></td>
                            <td><div className="btn btn-neutral">Delete</div></td>
                        </tr>
                    </tbody> )}
                    
                </table>
            </div>
        </div>
    );
};

export default MyList;