import { Section } from 'components/common/SectionLine';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const ServicesList: FC<{ services: string[] }> = ({ services }) => {
  return (
    <ul className='text-fontsoft'>
      {services.map((service) => (
        <li key={service} className='mb-2 flex items-center'>
          <AiFillCaretRight />
          <p className='ml-6 '>{service}</p>
        </li>
      ))}
    </ul>
  );
};

const About: NextPage = () => {
  return (
    <>
      <NextSeo title='Mis Servicios' description='Creacion de Sistemas y Paginas Web' />
      <div className='flex flex-col px-5 pt-14 lg:px-24 lg:pt-24 '>
        <Section title='Acerca de mi'>
          <div className=' leading-6 text-fontsoft'>
            <p className='mb-4 '>
              ¡Hola! 🤓 Mi nombre es <strong>Max Antony</strong>. Soy Desarrollador de software especializado en la creacion de Sistemas,
              Tiendas Virtuales y paginas web.
            </p>
            <p className=' '>
              Durante el tiempo que llevo trabajando he adquirido las habilidades y conocimientos para crear soluciones de alto impacto y
              usando las ultimas y mejores tecnologias.
            </p>
          </div>
        </Section>
        <Section title='Desarrollador Web FullStack'>
          <ServicesList services={['Typescript', 'Next.js', 'React.js', 'Nest.js', 'PostgreSQL', 'GraphQL']} />
        </Section>
        {/* <Section title='Servicios Creativos'> */}
        {/*   <ServicesList services={['Gestion de Redes Sociales', 'Diseño de Posts', 'Marketing Digital', 'Community Manager']} /> */}
        {/* </Section> */}
        {/* <Section title='Experiencia'>lorem</Section> */}
      </div>
    </>
  );
};

export default About;
