import { useContext } from 'react';
import { WiStars } from 'react-icons/wi';
import { Colors } from '../../data/Colors';
import PaintDataContext from '../../context/PaintDataContext';

const Navbar = () => {
   const {
      setSelectedColor,
      selectedColor,
      setLineWidth,
      lineWidth,
      eraserActive,
      setEraserActive,
   } = useContext(PaintDataContext);

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
         <div className="flex justify-between  space-x-4 items-start  ">
            <div className="flex flex-col space-y-2">
               {/* COLORS */}
               <div className=" flex   shadow-md  justify-evenly items-center border-2 p-2  space-x-4">
                  {Colors.map((color, index) => (
                     <span
                        key={index}
                        onClick={() => {
                           setSelectedColor(color);
                        }}
                        className={` cursor-pointer p-4 border-2  ${
                           selectedColor === color
                              ? 'border-indigo-700 transition ease-in-out delay-50'
                              : 'border-black-300'
                        } rounded-full `}
                        style={{
                           backgroundColor: color,
                        }}
                     ></span>
                  ))}
                  {/* <input type="color" className="px-4 py-2 rounded-full" /> */}
               </div>

               {/* Range */}

               <div>
                  <input
                     type="range"
                     min="0"
                     max="5"
                     value={lineWidth}
                     className="w-full accent-indigo-900"
                     onChange={(e) => {
                        setLineWidth(e.target.value);
                     }}
                  />
               </div>
            </div>

            <span
               onClick={() => {
                  setEraserActive(!eraserActive);
               }}
               className={`bg-white-300 p-6 h-full  ${
                  eraserActive ? 'shadow-inner' : ' shadow-md'
               } rounded-lg border-solid border-2 bg-white border-white cursor-pointer m-4`}
            ></span>
         </div>
      </div>
   );
};

export default Navbar;
