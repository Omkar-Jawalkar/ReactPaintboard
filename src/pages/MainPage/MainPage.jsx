import { useState, useRef } from 'react';
import CanvasBoard from '../../components/Canvasboard/Canvasboard';
import Navbar from '../../components/Navbar/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import PaintDataContext from '../../context/PaintDataContext';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import Confetti from 'react-confetti';

const circleVariant = {
   hidden: {
      scale: 0,
      opacity: 0,
      y: 290,
   },
   visible: {
      scale: 1,
      opacity: 1,
      y: 290,
      transition: {
         type: 'spring',
         stiffness: 100,
         damping: 15,
         duration: 1,
      },
   },
};

const MainPage = () => {
   const [selectedColor, setSelectedColor] = useState('black');
   const [lineWidth, setLineWidth] = useState(2);
   const [eraserActive, setEraserActive] = useState(false);
   const [resetCanvas, setResetCanvas] = useState(true);
   const [count] = useState(new Array(10).fill(0));
   const [showMagicButton, setShowMagicButton] = useState(true);
   const [showCelebration, setShowCelebration] = useState(false);

   const motionSpanRef = useRef(null);
   return (
      <div
         ref={motionSpanRef}
         className="bg-gradient-to-b min-h-screen from-indigo-200"
      >
         <PaintDataContext.Provider
            value={{
               selectedColor,
               setSelectedColor,
               lineWidth,
               setLineWidth,
               setEraserActive,
               eraserActive,
               resetCanvas,
               setResetCanvas,
            }}
         >
            <AnimatePresence>
               <Navbar />

               <Confetti
                  recycle={false}
                  onConfettiComplete={(confetti) => {
                     setShowCelebration(false);
                     confetti.reset();
                  }}
                  numberOfPieces={showCelebration ? 1000 : 0}
               />
               {/* Canvas Component */}
               <div className=" relative p-4">
                  <div className="flex absolute top-0 left-0 right-0 w-full flex-col justify-center items-center">
                     <motion.h4
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                           opacity: 1,
                           x: 0,
                           y: 210,
                           scale: 1,
                        }}
                        transition={{
                           type: 'spring',
                           stiffness: 100,
                           delay: 0.2,
                        }}
                        className=" text-center drop-shadow-xl font-mono text-2xl bg-gradient-to-r font-extrabold select-none from-indigo-800 to-purple-700 text-transparent bg-clip-text"
                     >
                        Heyyy
                     </motion.h4>
                     <motion.h1
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                           opacity: 1,
                           x: 0,
                           y: 230,
                           scale: 1.3,
                        }}
                        transition={{
                           type: 'spring',
                           stiffness: 100,
                           delay: 1,
                        }}
                        exit={{
                           opacity: 0,
                           y: -600,
                           transition: {
                              duration: 0.5,
                           },
                        }}
                        className="  hover:cursor-move drop-shadow-lg font-mono text-3xl bg-gradient-to-r font-extrabold select-none from-indigo-800 to-purple-700 text-transparent bg-clip-text"
                     >
                        {' '}
                        Lets Magic Paint{' '}
                     </motion.h1>

                     {showMagicButton ? (
                        <motion.button
                           initial={{ opacity: 0, x: 0, y: 500 }}
                           animate={{
                              opacity: 1,
                              x: 0,
                              y: 250,
                              scale: 1,
                           }}
                           exit={{
                              opacity: 0,
                              y: -600,
                              transition: {
                                 duration: 1.5,
                              },
                           }}
                           transition={{
                              type: 'spring',
                              stiffness: 100,
                              delay: 1.7,
                           }}
                           whileHover={{
                              scale: 1,
                           }}
                           whileTap={{
                              scale: 0.9,
                           }}
                           onClick={() => {
                              setShowMagicButton(false);
                              setShowCelebration(true);
                           }}
                           className="px-2 py-1 flex gap-1 justify-center items-center rounded-md text-white bg-gradient-to-r from-indigo-600 to-violet-800 shadow-lg"
                        >
                           Magic <FaWandMagicSparkles className="text-white" />
                        </motion.button>
                     ) : (
                        <div className="flex space-x-2 justify-center items-center">
                           {count.map((number, index) => (
                              <motion.span
                                 variants={circleVariant}
                                 initial="hidden"
                                 animate="visible"
                                 key={index}
                                 dragElastic={1}
                                 drag
                                 dragTransition={{
                                    bounceStiffness: 100,
                                    bounceDamping: 3,
                                 }}
                                 whileTap={{
                                    scale: 0.8,
                                 }}
                                 dragConstraints={motionSpanRef}
                                 className="p-4 hover:cursor-move shadow-xl rounded-full bg-indigo-700"
                              ></motion.span>
                           ))}
                        </div>
                     )}
                  </div>

                  <CanvasBoard />
               </div>
            </AnimatePresence>
         </PaintDataContext.Provider>
      </div>
   );
};

export default MainPage;
