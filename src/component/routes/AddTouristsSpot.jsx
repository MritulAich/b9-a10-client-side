import Swal from "sweetalert2";

const AddTouristsSpot = () => {

    const handleAddSpot = event => {
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
        const user = form.user.value;
        const email = form.email.value;

        const newSpot = {
            photo, spot, country, location, description,
            cost, seasonality, time, visitors, user, email
        }
        console.log(newSpot);


        fetch('https://trip-voyage-server.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'New Spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }


    return (
        <div className="bg-slate-200 p-16 lg:text-left md:text-left text-center flex flex-col">
            <p className="lg:text-3xl text-2xl mb-8">Add a <span className="text-violet-400">Tourists Spot</span></p>

            <form onSubmit={handleAddSpot}>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="space-y-2">
                        <p>Photo :</p>
                        <input type="url" name="photo" placeholder="type url" className="input input-bordered w-56" /><br />
                        <p>Spot Name :</p>
                        <input type="text" name="spot" className="input input-bordered" />
                        <p>Country :</p>
                        <input type="text" name="country" className="input input-bordered" />
                        <p>Location :</p>
                        <input type="text" name="location" className="input input-bordered" />
                    </div>

                    <div className="space-y-2">
                        <p>Short description :</p>
                        <input type="text" name="description" className="input input-bordered" />

                        <p>Average Cost :</p>
                        <input type="number" name="cost" className="input input-bordered" />

                        <p>Seasonality :</p>
                        <input type="text" name="seasonality" className="input input-bordered" />

                        <p>Travel time :</p>
                        <input type="text" name="time" className="input input-bordered" />
                    </div>

                    <div className="space-y-2">
                        <p>Total visitors per year :</p>
                        <input type="text" name="visitors" className="input input-bordered" />

                        <p>User name :</p>
                        <input type="text" name="user" className="input input-bordered" />

                        <p>User email :</p>
                        <input type="email" name="email" className="input input-bordered" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="btn btn-accent w-52 lg:w-96 md:w-96 mt-6 text-lg">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristsSpot;