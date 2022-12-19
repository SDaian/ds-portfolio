import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const Header = () => {

  return (
    <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://www.linkedin.com/sdaian'
          bgColor='transparent'
          fgColor='#fafafa'
        />
        <SocialIcon
          url='https://www.github.com/sdaian'
          bgColor='transparent'
          fgColor='#fafafa'
        />
        <SocialIcon
          url='https://www.twitter.com/sdaian'
          bgColor='transparent'
          fgColor='#fafafa'
        />
      </motion.div>
      <div className='hidden md:flex gap-2'>
        <Link href='/#about'>
          <button className='navButton'>About</button>
        </Link>
        <Link href='/#experience'>
          <button className='navButton'>Experience</button>
        </Link>
        <Link href='/#skills'>
          <button className='navButton'>Skills</button>
        </Link>
        <Link href='/#projects'>
          <button className='navButton'>Projects</button>
        </Link>
      </div>
      <Link href='/#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer navLink'
            network='email'
            bgColor='transparent'
            fgColor='#fafafa'
          />
          <p className='hidden md:inline-flex font-bold text-sm navLink'>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
