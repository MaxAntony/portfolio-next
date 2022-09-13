import { image } from '@utils/data';
import { PageWrapper } from 'components/common/PageWrapper';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import Image from 'next/future/image';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

type props = { children: ReactNode };
export const MainLayout: FC<props> = ({ children }) => {
  return (
    <div className='h-full w-screen bg-background font-poppins' id='MainLayout'>
      <Head>
        <title>Max Antony | Programacion y Marketing</title>
        <meta name='description' content='Profesional informatico enfocado en crear soluciones usando tecnologias web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main className='absolute left-0 right-0 top-14 bottom-0 overflow-hidden lg:top-16 lg:bottom-16  lg:left-16 lg:right-16'>
        <div className='absolute top-0 bottom-0 left-0 hidden w-2/5 bg-cover bg-center bg-no-repeat grayscale transition duration-500 hover:grayscale-0 lg:block'>
          <Image src={image} alt='background image' fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='absolute top-0 bottom-0 right-0 w-full lg:w-3/5'>
          <PageWrapper>{children}</PageWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};
