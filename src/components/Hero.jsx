

const Hero = () => {
    return (
        <div className="hero container min-h-screen mx-auto">
            <img src="https://i.ibb.co/BBytW1w/pexels-rene-asmussen-2544829.jpg" className="rounded-3xl" />
            <div className="hero-overlay bg-gradient-to-r from-[#150B2BB2]  bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[800px]">
                    <h1 className="mb-6 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex gap-4 justify-center">
                    <button className="btn back-original text-white border-none rounded-full">Explore Now</button>
                    <button className="btn bg-transparent text-white border rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;