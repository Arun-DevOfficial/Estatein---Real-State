import { NavLink } from "react-router";
import House from '../../assets/Symbol.png';
import { AlignRight } from 'lucide-react';

export default function Navbar() {
    return (
      <>
       <nav className="container mx-auto flex justify-between items-center py-8 font-inter px-5">
       <NavLink to="/" className={"flex items-center space-x-2"}>
                <img src={House} alt="House" className="w-7 sm:w-8" />
                <span className="font-medium sm:text-2xl">Estatein</span>
            </NavLink>
             <ul className="space-x-8 hidden md:flex">
                <NavLink to="/" className={'bg-gray-100 px-4 border rounded-md text-md'}>Home</NavLink>
                <NavLink to="/" className={'text-md'}>About Us</NavLink>
                <NavLink to="/" className={'text-md'}>Properties</NavLink>
                <NavLink to="/" className={'text-md'}>Services</NavLink>
             </ul>
             <AlignRight className="block sm:hidden" />
             <button className="text-md font-normal px-4 py-2 bg-[#713bf7] hidden sm:block text-white rounded-md">Contact Us</button>
       </nav>
      </>
    )
}