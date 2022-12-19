import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      '<Developer />',
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
        <h2 className='text-sm uppercase navLink pb-2 tracking-[10px]'>
          Software Engineer
        </h2>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB04' />
        </h1>
        <div className='pt-5 inline-block md:flex gap-4'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton disabledLink'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
