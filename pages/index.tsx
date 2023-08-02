import type { NextPage } from 'next';
import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home: NextPage = () => {
  const { text: typewriter } = useTypewriter({
    words: ['Sistemas', 'Paginas Web', 'Tiendas virtuales'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 25,
  });
  return (
    <div className={`absolute top-0 bottom-0 flex pl-5 lg:pl-24`}>
      <div className='flex items-center'>
        <div className='group flex flex-col'>
          <p>Hola, me llamo</p>
          <h3 className='mb-6 text-4xl font-bold xl:text-7xl'>Max Antony</h3>
          <span className='mb-6 h-1 w-10 bg-gray-700 transition-[width] duration-500 group-hover:w-full lg:w-16'></span>
          <p className='mb-7 text-xl text-gray-700'>
            Soy Desarrollador <span className='font-bold'>Web</span>
          </p>
          <p className='mb-7 text-xl text-gray-700'>
            y hago{' '}
            <span className='font-bold'>
              {typewriter}
              <Cursor cursorStyle='|' />
            </span>
          </p>
          <div className='uppercase '>
            <Link href='/contact'>
              <a
                className={`inline-block border border-gray-700 py-2 px-7 font-semibold
              text-gray-700 transition-all duration-500 hover:bg-gray-700 hover:text-white`}
              >
                contacto
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
