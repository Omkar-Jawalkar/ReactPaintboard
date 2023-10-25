import React, { useRef } from "react";

const Canvasboard = () => {
  const canvasRef = useRef();

  const drawSomething = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 10, 10);
  };

  return (
    <div className="w-full p-4  h-24">
      <div className="flex justify-between p-4 ">
        <h1 className="text-center pb-6 text-xl">Canvas board</h1>
        <button
          type="button"
          className="px-6 text-blue-900  bg-blue-300 rounded-md shadow-md "
          onClick={() => drawSomething()}
        >
          Draw something
        </button>
      </div>

      <canvas
        className="w-full min-h-full border-black border-2 border-solid"
        ref={canvasRef}
      />
    </div>
  );
};

export default Canvasboard;
