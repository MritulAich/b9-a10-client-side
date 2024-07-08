import Countries from "./component/Countries";
import Slider from "./component/Slider";
import TouristsSpots from "./component/TouristsSpots";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TouristsSpots></TouristsSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;