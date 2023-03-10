import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex justify-center items-center'
    >
      <div className='circles h-[200px] w-[200px] mt-52 animate-ping'></div>
      <div className='circles h-[300px] w-[300px] mt-52'></div>
      <div className='circles h-[500px] w-[500px] mt-52'></div>
      <div className='absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'></div>
      <div className='circles mt-52 h-[800px] w-[800px]'></div>
    </motion.div>
  );
};

export default BackgroundCircles;
