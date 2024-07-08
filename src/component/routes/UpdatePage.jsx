import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {

    const spots = useLoaderData();
    const {_id, photo, spot, country, location, description, cost,  seasonality, time, visitors} = spots;
    
    const handleUpdatePage = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;

        const updatedPage = {photo, spot, country, location, description, cost, seasonality, time, visitors};

        fetch(`https://trip-voyage-server.vercel.app/spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'This spot updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }


    return (
        <div className="bg-green-200 p-20  flex flex-col">
            <p className="text-xl lg:text-2xl mb-8">You can update your added spot here</p>
            
            <form onSubmit={handleUpdatePage}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <p>Tourists Spot Name</p>
                        <input type="text" name="spot" defaultValue={spot} className="input input-bordered" />

                        <p>New photo</p>
                        <input type="url" name="photo"  defaultValue={photo} className="input input-bordered" />

                        <p>Country</p>
                        <input type="text" name="country" defaultValue={country} className="input input-bordered" />
                    </div>
                    <div className="space-y-2">
                        <p>Location</p>
                        <input type="text" name="location" defaultValue={location} className="input input-bordered" />

                        <p>Seasonality</p>
                        <input type="text" name="seasonality" defaultValue={seasonality} className="input input-bordered" />

                        <p>Time</p>
                        <input type="text" name="time" defaultValue={time} className="input input-bordered" />
                    </div>
                    <div className="space-y-2">
                        <p>Cost</p>
                        <input type="number" name="cost" defaultValue={cost} className="input input-bordered" />

                        <p>Visitors</p>
                        <input type="text" name="visitors" defaultValue={visitors} className="input input-bordered" />

                        <p>Description</p>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="btn btn-accent lg:w-96 md:w-96 w-52 mt-6 text-lg">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;