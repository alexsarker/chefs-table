

const Hero = () => {
    return (
        <div>
            <div className="hero container min-h-screen mx-auto relative">
                <img src="https://i.ibb.co/BBytW1w/pexels-rene-asmussen-2544829.jpg" className="w-full h-full object-cover rounded-3xl" />
                <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#150B2BB2] bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[800px] mx-auto py-10 lg:py-0 relative">
                        <h1 className="mb-6 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn back-original text-white border-none rounded-full">Explore Now</button>
                            <button className="btn bg-transparent text-white border rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16 lg:mt-24 px-6">
                <h1 className="text-4xl font-semibold">Our Recipes</h1>
                <p className="second mt-3 mb-12 max-w-[850px] mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
        </div>




    );
};

export default Hero;