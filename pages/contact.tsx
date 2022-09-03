import { links } from '@utils/data';
import { Section } from 'components/common/SectionLine';
import { NextPage } from 'next';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';

type CardProps = { link: links; Icon: IconType; content: string };

const Card: FC<CardProps> = ({ link, Icon, content }) => {
  return (
    <a
      href={link}
      className='mb-4 ml-0 flex w-full flex-col items-center justify-center rounded-md border py-5 px-4 transition-all duration-300 last:mr-0 hover:border-gray-400 hover:text-black hover:shadow-lg md:mr-2 md:mb-0 md:w-1/2 md:last:ml-2'>
      <div className='mb-5 text-2xl'>
        <Icon className='' />
      </div>
      <p>{content}</p>
    </a>
  );
};

const data: CardProps[] = [
  { link: links.email, Icon: IoMdMail, content: 'maxpacami@gmail.com' },
  { Icon: IoLogoWhatsapp, content: '+51 997 286 267', link: links.whatsapp },
];

const Contact: NextPage = () => {
  return (
    <div className='px-5 pt-14 lg:px-24 lg:pt-24'>
      <Section title='Contacto'>
        <div className='mb-5 text-center font-medium'>
          <p className='mb-3'>¿Tienes preguntas o un proyecto en mente?</p>
          <p className='font-semibold'>Contactame:</p>
        </div>
        <div className=' flex flex-col md:flex-row'>
          {data.map((card, i) => (
            <Card Icon={card.Icon} content={card.content} link={card.link} key={i} />
          ))}
        </div>
        <div></div>
      </Section>
    </div>
  );
};

export default Contact
