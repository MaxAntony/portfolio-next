import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

type props = { href: string; text: string };
export const ActiveLink: FC<props> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={asPath === href ? 'text-blue-700' : ''}>{text}</a>
    </Link>
  );
};
