import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const FramerMotionPractice = () => {
   const [show, setShow] = useState(false);
   return (
      <div className=" w-full min-h-screen flex flex-col justify-center items-center  ">
         <AnimatePresence>
            {show ? (
               <motion.h1
                  initial={{
                     x: -1200,
                     y: -1200,
                     opacity: 0,
                  }}
                  animate={{
                     x: 0,
                     y: 0,
                     opacity: 1,
                  }}
                  transition={{
                     type: 'spring',
                     stiffness: 100,
                     damping: 15,
                     duration: 1,
                  }}
                  exit={{
                     x: 1200,
                     y: 1200,
                     opacity: 0,
                  }}
                  drag
                  dragConstraints={{
                     left: 0,
                     top: 0,
                     right: 0,
                     bottom: 0,
                  }}
                  className="text-5xl font-bold bg-gradient-to-r text-transparent from-blue-700 to-pink-700 bg-clip-text "
               >
                  Framer Motion Practice
               </motion.h1>
            ) : null}
         </AnimatePresence>

         <button
            onClick={() => {
               setShow(!show);
            }}
         >
            Show animation
         </button>
      </div>
   );
};

export default FramerMotionPractice;
