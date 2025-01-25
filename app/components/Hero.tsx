import House from '../../assets/House.png';

export default function Hero() {
  return (
    <>
      <section className="container mx-auto h-[80svh] p-4 flex flex-col lg:flex-row justify-between items-center gap-8 font-inter">
        {/* Image Section */}
        <div className="p-3 rounded-xl bg-white sm:bg-none shadow border sm:shadow-none sm:border-none w-full lg:w-1/2 flex justify-center lg:order-2">
          <img loading='lazy' src={House} alt="House" className="drop-shadow-lg max-w-full h-auto" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 max-w-[320px] md:max-w-[560px]">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:text-left leading-loose">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-500 text-justify">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start gap-4 my-8">
            <button className="text-md font-normal px-4 py-2 rounded-md border-[#713bf7] border-2 text-[#713bf7] w-full sm:w-auto">
              Learn More
            </button>
            <button className="text-md font-normal px-4 py-2 bg-[#713bf7] text-white rounded-md w-full sm:w-auto">
              Browse Property
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-4 flex-wrap md:py-5">
            <div className="shadow flex flex-col items-center text-center rounded-xl py-6 px-4 border flex-grow">
              <span className="text-4xl font-bold">200+</span>
              <span className="text-sm mt-2 text-gray-600">Happy Customers</span>
            </div>
            <div className="shadow flex flex-col items-center text-center rounded-xl py-6 px-4 border flex-grow">
              <span className="text-4xl font-bold">10k+</span>
              <span className="text-sm mt-2 text-gray-600">Properties</span>
            </div>
            <div className="shadow flex flex-col items-center text-center rounded-xl py-6 px-4 border flex-grow">
              <span className="text-4xl font-bold">16+</span>
              <span className="text-sm mt-2 text-gray-600">Years Of Experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
