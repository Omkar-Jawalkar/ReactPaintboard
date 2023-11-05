import React, { useContext } from 'react';
import { WiStars } from 'react-icons/wi';
import { Colors } from '../../data/Colors';
import PaintDataContext from '../../context/PaintDataContext';

const Navbar = () => {
   const { setSelectedColor } = useContext(PaintDataContext);

   return (
      <div className="flex justify-between items-center p-6 h-full ">
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
         <div className="flex justify-between space-x-4 items-center  ">
            <div className=" flex has-tooltip  shadow-md  justify-evenly items-center border-2 p-2  space-x-4">
               {Colors.map((color, index) => (
                  <span
                     key={index}
                     onClick={() => {
                        setSelectedColor(color);
                     }}
                     className={` cursor-pointer p-4 border-2 border-black-300 rounded-full `}
                     style={{
                        backgroundColor: color,
                     }}
                  ></span>
               ))}
               {/* <input type="color" className="px-4 py-2 rounded-full" /> */}
            </div>
            <div
               id="tooltip-default"
               role="tooltip"
               class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
               Tooltip content
               <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <span
               // onClick={() => setEraserActive(!eraserActive)}
               className="bg-white-300 p-6  rounded-lg border-solid border-2 shadow-md bg-white border-white cursor-pointer m-4 "
            ></span>
         </div>
      </div>
   );
};

export default Navbar;
