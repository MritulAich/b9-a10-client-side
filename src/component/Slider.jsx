
const Slider = () => {
    return (
        <div className="carousel w-full rounded-lg h-screen">

            <div id="slide1" className="carousel-item relative w-full" style={{ backgroundImage: 'url(https://i.ibb.co/bdn9Cy0/hero-area.jpg)'}}>
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="ml-28">
                        <h1 className="mb-5 text-5xl font-bold">Explore Southeast Asia like a local</h1>
                        <p className="mb-5">From iconic attractions to amazing experiences, your journey begins here</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="hero carousel-item relative w-full bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Bc2DSp8/southeast-asia-travel-2-1692073165.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    <div>
                        <p className="mb-5 text-3xl text-amber-300 font-semibold">The Southeast Asia backpacking trip <br />can broaden your mind with many new things</p>
                        <button className="btn btn-primary">See details</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="hero carousel-item relative w-full bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/26SddS8/Maya-Bay-Ko-Phi-Phi.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    <div>
                        <p className="mb-5 text-3xl text-purple-300 font-semibold">Lets visit traditional thai long-tail boat at Log Dalum Beach on Phi Phi Don island</p>
                        <button className="btn btn-primary">Visit Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;