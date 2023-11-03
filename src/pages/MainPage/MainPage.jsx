import React from 'react';
import CanvasBoard from '../../components/Canvasboard/Canvasboard';
import Navbar from '../../components/Navbar/Navbar';

const MainPage = () => {
   return (
      <div>
         <Navbar />
         {/* Canvas Component */}
         <div className="p-4">
            <CanvasBoard />
         </div>
      </div>
   );
};

export default MainPage;
