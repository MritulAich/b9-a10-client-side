import { useEffect, useState } from "react";

const Countries = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);


    return (
        <div className="mt-24 mx-4">
            <h3 className="lg:text-3xl text-violet-800 md:text-2xl text-2xl font-medium underline text-center mb-4">Countries</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    countries.map(country =>
                        <button key={country._id} className="card bg-sky-600 w-96">
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
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;









// [
//     {
//       "_id": 1,
//       "country_name": "Bangladesh",
//       "image": "https://i.ibb.co/SPQwdgc/Sundarban-National-Park.jpg",
//       "description": "The Sundarbans, the largest mangrove forest in the world, is a UNESCO World Heritage Site and a major tourist attraction in Bangladesh.",
//       "tourist_spots": [
//         {
//           "_id": "1a",
//           "tourist_spot_name": "Sundarban",
//           "country_name": "Bangladesh",
//           "location": "Khulna",
//           "short_description": "Largest mangrove forest in the world.",
//           "average_cost": "10000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "1b",
//           "tourist_spot_name": "Cox’s Bazar",
//           "country_name": "Bangladesh",
//           "location": "Chittagong",
//           "short_description": "World's longest natural sandy sea beach.",
//           "average_cost": "8000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "1c",
//           "tourist_spot_name": "Rangamati",
//           "country_name": "Bangladesh",
//           "location": "Chittagong Hill Tracts",
//           "short_description": "Hill district with natural beauty.",
//           "average_cost": "7000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "1d",
//           "tourist_spot_name": "Saint Martin Island",
//           "country_name": "Bangladesh",
//           "location": "Cox’s Bazar",
//           "short_description": "Only coral island in Bangladesh.",
//           "average_cost": "9000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         }
//       ]
//     },
//     {
//         "_id": 2,
//       "country_name": "Thailand",
//       "image": "https://i.ibb.co/3zrydgv/images-q-tbn-ANd9-Gc-Sz5fj-Z6-Hod-F9sb-O-f-N9-Mnd-XKb0-PZq-Sn-y5i-Q-s.jpg",
//       "description": "The Grand Palace in Bangkok is one of the most famous landmarks in Thailand, showcasing the rich history and culture of the country.",
//       "tourist_spots": [
//         {
//           "_id": "2a",
//           "tourist_spot_name": "Bangkok",
//           "country_name": "Thailand",
//           "location": "Central Thailand",
//           "short_description": "Capital city with vibrant street life.",
//           "average_cost": "12000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "2b",
//           "tourist_spot_name": "Chiang Mai",
//           "country_name": "Thailand",
//           "location": "Northern Thailand",
//           "short_description": "Mountainous city with ancient temples.",
//           "average_cost": "11000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "2c",
//           "tourist_spot_name": "Ayutthaya",
//           "country_name": "Thailand",
//           "location": "Central Thailand",
//           "short_description": "Historic city with ancient ruins.",
//           "average_cost": "10000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         }
//       ]
//     },
//     {
//         "_id": 3,
//       "country_name": "Indonesia",
//       "image": "https://i.ibb.co/4RzfKm9/beach-bali-indonesia-jpg.webp",
//       "description": "Bali, known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs, is a top tourist destination in Indonesia.",
//       "tourist_spots": [
//         {
//           "_id": "3a",
//           "tourist_spot_name": "Bali",
//           "country_name": "Indonesia",
//           "location": "Bali Island",
//           "short_description": "Popular tourist destination with beaches.",
//           "average_cost": "15000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "3b",
//           "tourist_spot_name": "Borobudur Temple",
//           "country_name": "Indonesia",
//           "location": "Central Java",
//           "short_description": "Largest Buddhist temple in the world.",
//           "average_cost": "14000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "3c",
//           "tourist_spot_name": "Komodo National Park",
//           "country_name": "Indonesia",
//           "location": "Lesser Sunda Islands",
//           "short_description": "Home to the Komodo dragon.",
//           "average_cost": "13000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "3d",
//           "tourist_spot_name": "Yogyakarta",
//           "country_name": "Indonesia",
//           "location": "Java",
//           "short_description": "Cultural center with traditional arts.",
//           "average_cost": "12000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         }
//       ]
//     },
//     {
//         "_id": 4,
//       "country_name": "Malaysia",
//       "image": "https://i.ibb.co/TMkwNNW/Cn-T-11-Petronas-Towers-1125-v1-1.jpg",
//       "description": "The Petronas Towers in Kuala Lumpur are an iconic symbol of Malaysia, representing the country's rapid development and modern architecture.",
//       "tourist_spots": [
//         {
//           "_id": "4a",
//           "tourist_spot_name": "Kuala Lumpur",
//           "country_name": "Malaysia",
//           "location": "West Malaysia",
//           "short_description": "Capital city with modern architecture.",
//           "average_cost": "13000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "4b",
//           "tourist_spot_name": "Langkawi",
//           "country_name": "Malaysia",
//           "location": "Kedah",
//           "short_description": "Popular island with beaches and resorts.",
//           "average_cost": "14000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "4c",
//           "tourist_spot_name": "Penang",
//           "country_name": "Malaysia",
//           "location": "Northwest Malaysia",
//           "short_description": "Known for its culinary delights.",
//           "average_cost": "12000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "4d",
//           "tourist_spot_name": "Taman Negara National Park",
//           "country_name": "Malaysia",
//           "location": "Peninsular Malaysia",
//           "short_description": "Oldest tropical rainforest in the world.",
//           "average_cost": "15000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         }
//       ]
//     },
//     {
//         "_id": 5,
//       "country_name": "Vietnam",
//       "image": "https://i.ibb.co/zQgqtSL/Halong-Bay-aa0f7e71a1db.jpg",
//       "description": "Ha Long Bay, known for its emerald waters and thousands of towering limestone islands topped with rainforests, is a UNESCO World Heritage Site in Vietnam.",
//       "tourist_spots": [
//         {
//           "_id": "5a",
//           "tourist_spot_name": "Ha Long Bay",
//           "country_name": "Vietnam",
//           "location": "Quang Ninh Province",
//           "short_description": "Known for emerald waters and limestone islands.",
//           "average_cost": "16000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "5b",
//           "tourist_spot_name": "Ho Chi Minh City",
//           "country_name": "Vietnam",
//           "location": "Southern Vietnam",
//           "short_description": "Largest city in Vietnam with rich history.",
//           "average_cost": "15000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "5c",
//           "tourist_spot_name": "Hoi An Ancient Town",
//           "country_name": "Vietnam",
//           "location": "Quang Nam Province",
//           "short_description": "Well-preserved ancient trading port.",
//           "average_cost": "14000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "5d",
//           "tourist_spot_name": "Phong Nha Caves",
//           "country_name": "Vietnam",
//           "location": "Quang Binh Province",
//           "short_description": "Known for its cave systems and karst mountains.",
//           "average_cost": "13000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         }
//       ]
//     },
//     {
//         "_id": 6,
//       "country_name": "Cambodia",
//       "image": "https://i.ibb.co/fncDDL0/800px-Angkor-Wat-Temple.jpg",
//       "description": "Angkor Wat, the largest religious monument in the world, is a significant archaeological site and a symbol of Cambodia.",
//       "tourist_spots": [
//         {
//           "_id": "6a",
//           "tourist_spot_name": "Angkor Wat",
//           "country_name": "Cambodia",
//           "location": "Siem Reap",
//           "short_description": "Largest religious monument in the world.",
//           "average_cost": "17000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "6b",
//           "tourist_spot_name": "Siem Reap",
//           "country_name": "Cambodia",
//           "location": "Northwest Cambodia",
//           "short_description": "Gateway to the ruins of Angkor.",
//           "average_cost": "16000 BDT",
//           "seasonality": "Winter",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "6c",
//           "tourist_spot_name": "Phnom Penh",
//           "country_name": "Cambodia",
//           "location": "South-central Cambodia",
//           "short_description": "Capital city with historic sites.",
//           "average_cost": "15000 BDT",
//           "seasonality": "Summer",
//           "view_details_button": "View Details"
//         },
//         {
//           "_id": "6d",
//           "tourist_spot_name": "Bokor National Park",
//           "country_name": "Cambodia",
//           "location": "Kampot Province",
//           "short_description": "Known for its abandoned French hill station.",
//           "average_cost": "14000 BDT",
//           "seasonality": "Spring",
//           "view_details_button": "View Details"
//         }
//       ]
//     }
//   ]





























