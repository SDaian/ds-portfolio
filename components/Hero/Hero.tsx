import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      '<Traveller />',
      '<FootballPlayer />',
      '<TheOfficeFan />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='z-20'>
        <motion.div
          initial={{ y: -500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
          className='flex flex-col justify-center mb-2'
        >
          <h1 className='font-bold text-3xl md:text-5xl tracking-[5px]'>Daian Scuarissi</h1>
          <h2 className='text-sm md:text-xl uppercase navLink pb-2 tracking-[6px]'>
            Software Engineer
          </h2>
        </motion.div>
        <h1 className='text-2xl md:text-2xl lg:text-4xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB04' />
        </h1>
        <div className='pt-5 flex md:justify-center md:gap-4 overflow-x-auto scrollbar-hide px-2 w-[350px] md:w-[500px]'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          {/* <Link href='#skills'>
            <button className='heroButton disabledLink'>Skills</button>
          </Link> */}
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
