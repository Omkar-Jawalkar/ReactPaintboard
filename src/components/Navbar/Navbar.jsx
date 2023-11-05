import React from 'react';
import { WiStars } from 'react-icons/wi';

const Navbar = () => {
   return (
      <div className="flex justify-between p-6 h-full ">
         {/* LEFT SIDE */}
         <div className="flex cursor-pointer space-x-1 ">
            <div className="flex relative">
               <span className=" font-semibold  text-purple-600">Magic</span>
               <WiStars className="text-4xl absolute top-[-0.6rem] left-[9.7rem] text-purple-600 " />
            </div>

            <h1 className="text-xl text-purple-600 font-bold transition duration-300 ease-in-out">
               PaintBoard
            </h1>
         </div>

         {/* Right Side */}
         <div className="flex">
            <h1 className="text-xl">COLOR</h1>
         </div>
      </div>
   );
};

export default Navbar;
