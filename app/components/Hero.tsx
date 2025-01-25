import House from '../../assets/House.png';
import SubContainer from '../../assets/SubContainer.png';

export default function Hero() {
  return (
    <section className="container mx-auto flex justify-between items-center py-8 font-inter h-[80vh] gap-28">
      <div className="container max-w-[620px] leading-loose">
        <h1 className="text-5xl font-bold">Discover You Dream Property with Estatein</h1>
        <p className="text-xl mt-4 text-gray-500">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        <div className="flex space-x-6 mt-8 mb-16">
        <button className="text-md font-normal px-4 py-2 rounded-md mt-4 border-[#713bf7] border-2 text-[#713bf7]">Learn More</button>
        <button className="text-md font-normal px-4 py-2 bg-[#713bf7] text-white rounded-md mt-4">Browser Property</button>
        </div>
        <div className="flex space-x-4">
           <div className="shadow flex flex-col rounded-xl w-52 py-6 px-4 border">
                <span className="text-4xl font-bold">200+</span>
                <span className="text-sm mt-2 text-gray-600">Happy Customers</span>
           </div>
           <div className="shadow flex rounded-xl flex-col w-52 py-6 px-4 border">
                <span className="text-4xl font-bold">10k+</span>
                <span className="text-sm mt-2 text-gray-600">Properties</span>
           </div>
           <div className="shadow rounded-xl flex flex-col w-52 py-6 px-4 border">
                <span className="text-4xl font-bold">16+</span>
                <span className="text-sm mt-2 text-gray-600">Year Of Experience</span>
           </div>
        </div>
      </div>
      <div className="container">
        <img src={House} alt="Morden House" className='drop-shadow-2xl'/>
      </div>
    </section>
  );
}