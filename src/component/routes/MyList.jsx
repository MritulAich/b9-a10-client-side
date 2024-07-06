import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const loadSpots = useLoaderData();
    const [spots, setSpots] = useState(loadSpots);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://trip-voyage-server.vercel.app/spot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added spot has been deleted.",
                                icon: "success"
                            })
                            const remaining = spots.filter(cof => cof._id !== _id);
                            setSpots(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className='lg:m-5 md:m-3 lg:mt-10 mt-6'>
                <table className="table ">
                    <thead>
                        <tr className="lg:text-lg md:text-lg">
                            <th>Spot Name</th>
                            <th>Country</th>
                            <th>Average Cost</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    {spots.map(spot =>
                        <tbody key={spot._id}>
                            {/* row 1 */}
                            <tr className="hover">
                                <th>{spot.spot}</th>
                                <td>{spot.country}</td>
                                <td>{spot.cost}</td>
                                <td className="space-y-1">
                                <div>
                                    <Link to={`/updatePage/${spot._id}`}>
                                        <div className="btn btn-accent">Update</div>
                                    </Link>
                                </div>
                                <div onClick={() => handleDelete(spot._id)} className="btn btn-neutral">Delete</div>
                                </td>
                            </tr>
                        </tbody>)}

                </table>
            </div>
    );
};

export default MyList;