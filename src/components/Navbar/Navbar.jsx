import React from 'react';

const Navbar = () => {
   return (
      <div className="flex justify-between p-6 h-full bg-blue-50">
         {/* LEFT SIDE */}
         <div className="flex space-x-1 ">
            <span className=" font-semibold relative  text-purple-600">
               Magic
            </span>
            <h1 className="text-xl transition duration-300 ease-in-out">
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
