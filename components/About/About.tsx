import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-min md:h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center pt-[160px] md:pt-0'
    >
      <h3 className='sectionTitle'>About</h3>

      <div className='md:mt-0 flex items-center flex-col md:flex-row'>
        <motion.img
          src='https://i.pinimg.com/550x/b4/2f/a2/b42fa24fb756c16f8d8420b889c168e0.jpg'
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 1, opacity: 1 }}
          viewport={{ once: false }}
          className='mb-4 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-2xl font-semibold'>
            Here is a little bit <span className='underline'>about me</span>.
          </h4>
          <span className='block text-sm md:text-lg mt-4'>
            Hi there 👋, I am a software engineer with over 5 years of
            experience developing applications and web interfaces. My expertise
            lies in frontend technologies such as{' '}
            <Link href='https://angular.io/' passHref>
              <a className='text-[#F7AB0A] underline' target='_blank'>
                Angular
              </a>
            </Link>
            , and{' '}
            <Link href='https://reactjs.org/' passHref>
              <a className='text-[#F7AB0A] underline' target='_blank'>
                ReactJS
              </a>
            </Link>
            .
          </span>{' '}
          <span className='block text-sm md:text-lg mt-4'>
            In my current role at{' '}
            <Link href='https://thisdot.co' passHref>
              <a className='text-[#F7AB0A] underline' target='_blank'>
                This Dot Labs
              </a>
            </Link>
            , I have worked on a variety of projects, including the development
            of a responsive web application using Angular and the implementation
            of a dynamic user interface using React.
          </span>{' '}
          <span className='text-sm md:text-lg mt-4'>
            In the future, I hope to continue growing as a software engineer and
            to work on challenging and rewarding projects that allow me to
            showcase my skills and experience. I am always open to new
            opportunities and am eager to learn from other experienced
            professionals in the field.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
