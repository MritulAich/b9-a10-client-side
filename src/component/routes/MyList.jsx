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
                {/* {
                 spots.map(spot => <AddedSpot
                 key={spot._id}
                 spot={spot}
      `          spots={spots}
                 setSpots={setSpots}></AddedSpot>)
                } */}
                <table className="table ">

                    <thead>
                        <tr>
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Average Cost</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>{spots[0].spot}</th>
                            <td>{spots[0].country}</td>
                            <td>{spots[0].cost}</td>
                            <td><div className="btn btn-accent">Update</div></td>
                            <td><div className="btn btn-neutral">Delete</div></td>
                        </tr>
                        <tr className="hover">
                            <th>{spots[1].spot}</th>
                            <td>{spots[1].country}</td>
                            <td>{spots[1].cost}</td>
                            <td><div className="btn btn-accent">Update</div></td>
                            <td><div className="btn btn-neutral">Delete</div></td>
                        </tr>
                        <tr className="hover">
                            <th>{spots[2].spot}</th>
                            <td>{spots[2].country}</td>
                            <td>{spots[2].cost}</td>
                            <td><div className="btn btn-accent">Update</div></td>
                            <td><div className="btn btn-neutral">Delete</div></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;