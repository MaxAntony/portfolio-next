import { IProject } from '@ts/interfaces';
import { pagesSpanish, projects } from '@utils/data';
import { Section } from 'components/common/SectionLine';
import Image from 'next/future/image';
import { FC } from 'react';

type ProjectProps = { project: IProject };

const Project2: FC<ProjectProps> = ({ project }) => {
  return (
    <div className='group mb-24'>
      <div className='grid grid-cols-11 items-center gap-2'>
        <div className='col-start-1 col-end-12 w-full rounded border bg-white bg-contain bg-center bg-no-repeat shadow grayscale transition-all duration-500 hover:z-20 hover:grayscale-0 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8'>
          <Image src={project.image} width={2000} height={2000} alt='project' />
        </div>
        <div className='lg:z-10 col-start-1 col-end-12 lg:col-start-1 lg:col-end-[7] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-7 lg:group-odd:col-end-[-1] lg:group-odd:text-right'>
          <div className=' rounded bg-white p-4 shadow-xl'>
            <h5 className='rounded-t  pb-3 text-2xl font-bold text-gray-700'>{project.title}</h5>
            <div className='cursor-pointer rounded-b text-fontsoft hover:bg-gray-50'>
              <p>{project.shortDescription}</p>
            </div>
          </div>
          <button
            name='ver mas'
            className='hidden border-2 border-gray-700 p-2 transition duration-300 hover:bg-gray-700 hover:text-white'>
            ver mas
          </button>
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className='px-5 pt-14 lg:px-24 lg:pt-24'>
      <Section title={pagesSpanish[2].name}>
        {projects.map((project, i) => (
          <Project2 project={project} key={i} />
        ))}
      </Section>
    </div>
  );
};

export default Portfolio
