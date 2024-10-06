import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://trip-voyage-server.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);


    return (
        <div className="mt-24 mx-4">
            <h3 className="lg:text-3xl text-violet-800 md:text-2xl text-2xl font-medium underline text-center mb-4">Countries</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    countries.map(country =>
                        <Link to={`/countrySpot/${country._id}`}  key={country._id} className="card bg-sky-600 w-96">
                            <figure className="px-4 pt-5">
                                <img
                                    src={country.image}
                                    alt="not found"
                                    className="rounded-lg w-[352px]" />
                            </figure>
                            <div className="card-body items-center text-white">
                                <h2 className="card-title underline">{country.country_name}</h2>
                                <p>{country.description}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;





























