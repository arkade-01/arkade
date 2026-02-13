import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';
import { pastProjects, workExperience } from '@/data';

const Work = () => {
  return (
    <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-5xl w-full'>
      <Navbar />
      
      {/* Work Experience */}
      <div className='mt-10 sm:mt-12 mb-8'>
        <h1 className='xs:text-2xl sm:text-3xl font-bold mb-6'>
          Work Experience
        </h1>
      </div>
      
      <div className='mb-16 space-y-6'>
        {workExperience.map((work, id) => (
          <div key={id} className='bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5'>
            <h4 className='font-bold text-lg text-[#06FCD8] mb-2'>
              {work.title}
            </h4>
            <p className='text-sm text-[#9a9a9a]'>
              {work.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <h1 className='xs:text-2xl sm:text-3xl font-bold text-[#06FCD8] mb-8'>
        Projects
      </h1>
      
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
        {pastProjects.map((project, id) => (
          <Link
            key={id}
            href={project.path}
            target='_blank'
            className='group bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#06FCD8] transition-all duration-300'
          >
            <div className='flex justify-between items-start mb-3'>
              <h3 className='text-xl font-bold text-white group-hover:text-[#06FCD8] transition-colors'>
                {project.name}
              </h3>
              {project.video && (
                <span className='text-xs px-2 py-1 rounded-full bg-[#2a2a2a] text-[#9a9a9a]'>
                  📹 Demo
                </span>
              )}
            </div>
            
            <p className='text-[#9a9a9a] text-sm mb-4'>{project.desc}</p>
            
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className='text-xs px-2 py-1 rounded-full bg-[#2a2a2a] text-[#06FCD8]'
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <CallToAction />
    </div>
  );
};

export default Work;
