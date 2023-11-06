import { motion } from 'framer-motion';

const FramerMotionPractice = () => {
   return (
      <div className=" w-full min-h-screen flex flex-col justify-center items-center    ">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
         >
            <h1>Framer Motion Practice</h1>
         </motion.div>
      </div>
   );
};

export default FramerMotionPractice;
