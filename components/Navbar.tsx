import { pagesSpanish } from '@utils/data';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, FC, forwardRef, useState } from 'react';
import { Copyright } from './Copyright';
import { SocialLinks } from './SocialLinks';
import imageProgrammer from '@public/programmer.jpg';

export const Navbar: FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const LinkMovil = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function element(
    { onClick, href, children },
    ref
  ) {
    return (
      <a
        href={href}
        className='flex justify-center py-4'
        onClick={(e) => {
          setMenuOpen(false);
          if (onClick) onClick(e);
        }}
        ref={ref}
      >
        {children}
      </a>
    );
  });

  return (
    <>
      {/* MOVIL */}
      {/*backdrop*/}
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-50' : ' pointer-events-none opacity-0'
        } `}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed z-10 flex h-full w-64 flex-col items-end border-l bg-white px-5 pt-20 transition-all lg:top-16 ${
          menuOpen ? 'right-0' : '-right-64'
        }`}
      >
        <div className='flex h-full w-full flex-col justify-between'>
          <div>
            <Image src={imageProgrammer} alt='programmer' />
            <ul className='mt-14 flex w-full flex-col'>
              {pagesSpanish.map(({ name, path }) => (
                <li key={path} className='cursor-pointer text-center text-xl '>
                  <Link href={path} passHref>
                    <LinkMovil>{name}</LinkMovil>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mb-4 flex flex-col items-center'>
            <div className='mb-4 flex w-full justify-between'>
              <SocialLinks />
            </div>
            <Copyright />
          </div>
        </div>
      </div>
      <div className='relative top-0 left-0 right-0 flex h-14 items-center justify-end bg-white px-5 lg:h-16 lg:px-16'>
        <div className='relative'>
          <ul className='hidden lg:flex'>
            {pagesSpanish.map(({ name, path }) => (
              <li key={path}>
                <Link key={path} href={path}>
                  <a
                    className={`cursor-pointer px-8 py-2 font-medium hover:text-white ${
                      router.asPath === path ? 'bg-black text-white' : 'hover:bg-gray-700'
                    }`}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          name='menu'
          className='relative z-30 flex h-[24px] w-[30px] cursor-pointer flex-col items-center lg:hidden'
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div
            className={`mb-[8px] h-[2px] w-[30px] rounded bg-black transition-transform ${menuOpen && 'translate-y-[10px] rotate-45'}`}
          ></div>
          <div className={`mb-[8px] h-[2px] w-[30px] rounded bg-black transition-all ${menuOpen && 'opacity-0'} `}></div>
          <div className={`h-[2px] w-[30px] rounded bg-black transition-transform ${menuOpen && '-translate-y-[10px] -rotate-45'}`}></div>
        </button>
      </div>
    </>
  );
};
