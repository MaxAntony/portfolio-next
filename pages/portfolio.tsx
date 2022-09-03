import { IProject } from '@ts/interfaces';
import { pagesSpanish, projects } from '@utils/data';
import { Section } from 'components/common/SectionLine';
import Image from 'next/image';
import { FC, useState } from 'react';

type ProjectProps = { project: IProject };
// const Project: FC<ProjectProps> = ({ project }) => {
//   // para mejorar https://jsfiddle.net/ch9ukp3v/
//   return (
//     <div className='flex bg-white mb-4 rounded shadow-xl'>
//       <div className="relative w-1/2">
//         <Image
//           src={project.image}
//           layout="fill"
//           objectFit="contain"
//         />
//         {/* <div className="w-full relative">
//            <h2 className="text-center font-semibold text-4xl pb-8 pt-14 text-pink-600">hello</h2>
//         </div>*/}
//       </div>
//       <div className='w-1/2 h-96'>
//         <h2>{project.title}</h2>
//         <p>{project.shortDescription}</p>
//       </div>
//     </div>
//
//   );
// };
//

const Project2: FC<ProjectProps> = ({ project }) => {
  const [imageSize, setImageSize] = useState({
    width: 2000,
    height: 2000
  })
  return (
    <div className='group mb-24'>
      <div className='grid grid-cols-11 items-center gap-2'>
        <div className='col-start-1 col-end-12 w-full rounded border bg-white bg-contain bg-center bg-no-repeat shadow grayscale transition-all duration-500 hover:z-20 hover:grayscale-0 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8'>
          <Image src={project.image} width={imageSize.width} height={imageSize.height} alt='project' onLoadingComplete={(e) => {
            console.log(e)
            setImageSize({ width: e.naturalWidth, height: e.naturalHeight })
          }} />
        </div>
        {/*<img
          src={project.image}
          alt='project'
          className='col-start-1 col-end-12 w-full rounded border bg-white bg-contain bg-center bg-no-repeat shadow grayscale transition-all duration-500 hover:z-20 hover:grayscale-0 lg:col-start-6 lg:col-end-[-1] lg:row-start-1 lg:row-end-[-1] lg:group-odd:col-start-1 lg:group-odd:col-end-8'
        // style={{ backgroundImage: `url(${project.image})` }}
        />*/}
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
