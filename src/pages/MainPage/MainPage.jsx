import React, { useState } from 'react';
import CanvasBoard from '../../components/Canvasboard/Canvasboard';
import Navbar from '../../components/Navbar/Navbar';
import PaintDataContext from '../../context/PaintDataContext';

const MainPage = () => {
   const [selectedColor, setSelectedColor] = useState('black');
   return (
      <div className="bg-gradient-to-b min-h-screen from-indigo-200">
         <PaintDataContext.Provider
            value={{
               selectedColor,
               setSelectedColor,
            }}
         >
            <Navbar />
            {/* Canvas Component */}
            <div className="p-4">
               <CanvasBoard />
            </div>
         </PaintDataContext.Provider>
      </div>
   );
};

export default MainPage;
