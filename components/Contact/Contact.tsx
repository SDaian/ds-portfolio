import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactProps = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: ContactProps) => {
  const { phoneNumber, address, email } = pageInfo;

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:scuarissid@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sectionTitle'>Contact</h3>

      <div className='flex flex-col space-y-5'>
        <h4 className='text-2xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='md:block underline decoration-[#F7AB04]'>
            Let&apos;s talk.
          </span>
        </h4>

        <div className='space-y-2'>
          <div className='flex items-center space-x-3 justify-center'>
            <PhoneIcon className='contactIcon' />
            <p className='text-sm'>{phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <MapPinIcon className='contactIcon' />
            <p className='text-sm'>{address}</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <EnvelopeIcon className='contactIcon' />
            <p className='text-sm'>{email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 md:w-fit md:mx-auto'
        >
          <div className='flex gap-2 md:gap-0 flex-col md:flex-row md:space-x-2'>
            <input
              {...register('name')}
              className='contactInput'
              placeholder='Name'
              type='text'
            />
            <input
              {...register('email')}
              className='contactInput'
              placeholder='Email'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            className='contactInput'
            placeholder='Subject'
            type='text'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message'
          />
          <button type='submit' className='contactButton'>
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
