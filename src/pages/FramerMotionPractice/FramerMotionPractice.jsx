import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useState } from 'react';

const FramerMotionPractice = () => {
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const { scrollYProgress } = useScroll();
   return (
      <>
         <motion.div
            style={{
               scaleX: scrollYProgress,
               transformOrigin: '0%',
            }}
            className="fixed top-0 h-1 left-0  right-0 bg-indigo-900"
         ></motion.div>
         <div className=" w-full min-h-screen flex flex-col  justify-center items-center  ">
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

            <motion.button
               initial={{ opacity: 1 }}
               whileHover={{
                  scale: 1.1,
               }}
               transition={{
                  layout: {
                     duration: 1,
                     type: 'spring',
                  },
               }}
               layout
               onClick={() => {
                  setShow2(!show2);
               }}
               className="bg-blue-700 mx-4 w-1/2 text-white font-bold py-2 px-4 border border-blue-700 hover:border-blue-800 rounded"
            >
               HEYY click me to expand
               {show2 ? (
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="p-4"
                  >
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Quae excepturi provident minus enim libero velit,
                     laboriosam rem, eos odit quibusdam ex earum. Distinctio
                     nihil reiciendis quod voluptates? Odio, veniam molestias.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reprehenderit doloribus temporibus quibusdam optio quas,
                     minus cumque officiis, laudantium quos ex, quia vero
                     perferendis fuga similique numquam? Nulla eum officia
                     provident!
                  </motion.p>
               ) : null}
            </motion.button>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            <p className="p-4">
               {' '}
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Reiciendis voluptas facere quos sint cum culpa doloribus odio
               suscipit! Neque fugit dicta a tempore voluptates inventore
               distinctio maiores iusto corrupti quidem.
            </p>

            {/* <button
            onClick={() => {
               setShow(!show);
            }}
         >
            Show animation
         </button> */}
         </div>
      </>
   );
};

export default FramerMotionPractice;
