import React from 'react';
import CanvasBoard from '../../components/Canvasboard/Canvasboard';

const MainPage = () => {
   return (
      <div>
         {/* <div className=" flex h-full bg-blue-50 flex-col space-x-2 ">
                <h1 className="w-full text-center p-4  m-4 font-bold text-4xl">
                    Paint Board
                </h1>
            </div> */}

         {/* Canvas Component */}

         <CanvasBoard />
      </div>
   );
};

export default MainPage;
