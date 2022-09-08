import { FC, ReactNode } from 'react';

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={`absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll transition-opacity`}>{children}</div>;
};
