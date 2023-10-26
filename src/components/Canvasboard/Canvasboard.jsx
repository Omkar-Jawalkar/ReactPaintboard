import React, { useEffect, useRef } from 'react';

const Canvasboard = () => {
   const canvasRef = useRef();
   const xCoordinateRef = useRef();
   const yCoordinateRef = useRef();

   const drawSomething = () => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 10, 10);
   };

   const getCoordinates = (event) => {
      xCoordinateRef.current = event.clientX;
      yCoordinateRef.current = event.clientY;
   };

   useEffect(() => {
      console.log(xCoordinateRef.current);
      console.log(yCoordinateRef.current);
   }, [xCoordinateRef, yCoordinateRef]);

   return (
      <div className="w-full p-4  h-24">
         <div className="flex justify-between p-4 ">
            <h1 className="text-center pb-6 text-xl">Canvas board</h1>
            <h3>
               X Coordinate - {xCoordinateRef.current} and Y Coordinate -{' '}
               {yCoordinateRef.current}{' '}
            </h3>
            <button
               type="button"
               className="px-6 text-blue-900  bg-blue-300 rounded-md shadow-md "
               onClick={() => drawSomething()}
            >
               Draw something
            </button>
         </div>

         <canvas
            className="w-full hover:cursor-crosshair min-h-full border-black border-2 border-solid"
            ref={canvasRef}
            onMouseMove={(event) => getCoordinates(event)}
         />
      </div>
   );
};

export default Canvasboard;
