import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background:
          'linear-gradient(to right, #000428 , #004e92)',
      }}
      className='text-white w-screen h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#F7AB40]/80'
    >
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
