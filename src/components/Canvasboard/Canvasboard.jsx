import React, { useEffect, useRef, useState } from 'react';

const Canvasboard = () => {
   const canvasRef = useRef(null);
   const canvasContextRef = useRef(null);
   const [drawing, setDrawing] = useState(false);

   const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      canvasContextRef.current.beginPath();
      canvasContextRef.current.moveTo(offsetX, offsetY);
      setDrawing(true);
   };

   const finishDrawing = () => {
      canvasContextRef.current.closePath();
      setDrawing(false);
   };

   const draw = ({ nativeEvent }) => {
      if (!drawing) {
         return;
      }
      const { offsetX, offsetY } = nativeEvent;
      canvasContextRef.current.lineTo(offsetX, offsetY);
      canvasContextRef.current.stroke();
   };

   useEffect(() => {
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext('2d');
      canvasContext.lineCap = 'round';
      canvasContext.strokeStyle = 'black';
      canvasContext.lineWidth = 5;
      canvasContextRef.current = canvasContext;

      // Resize the canvas to match its container's dimensions
      const resizeCanvas = () => {
         canvas.width = canvas.parentNode.offsetWidth;
         canvas.height = canvas.parentNode.offsetHeight;
      };

      // Attach a listener to resize the canvas when the window is resized
      window.addEventListener('resize', resizeCanvas);

      // Initialize the canvas size
      resizeCanvas();

      return () => {
         // Remove the resize event listener when the component unmounts
         window.removeEventListener('resize', resizeCanvas);
      };
   }, []);

   return (
      <div style={{}}>
         <canvas
            ref={canvasRef}
            className="border-black-200  border-solid border-2"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
         ></canvas>
      </div>
   );
};

export default Canvasboard;
