import { FC, ReactNode } from 'react';

export const Section: FC<{ title: string; children: ReactNode }> = ({ children, title }) => {
  return (
    <div className='mb-20'>
      <div className='flex w-full items-center'>
        <div className='whitespace-nowrap font-bold uppercase tracking-[4px] lg:tracking-[8px]'>{title}</div>
        <div className='top-0 left-0 ml-7 h-[1px] w-full -translate-y-[50%] bg-gray-700'></div>
      </div>
      <div className='mt-14'>{children}</div>
    </div>
  );
};
