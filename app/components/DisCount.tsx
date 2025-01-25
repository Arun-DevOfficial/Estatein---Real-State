import { X } from 'lucide-react';

export default function DisCount() {

    return (
        <div className="bg-[#713bf7] py-3 text-white font-inter flex items-center justify-center px-4 space-x-5">
            <div className="flex items-center">
                <span>✨</span>
                <p className="text-[10px] sm:text-[12px] container text-center ">
                    Discover Your Dream Properly with Estatein. 
                    <span className='underline ml-1'>Learn More.</span>
                </p>
            </div>
            <X className='w-4 cursor-pointer'  />
        </div>
    );
}
