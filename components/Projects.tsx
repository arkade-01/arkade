import React from 'react';
import ProjectCard from './ProjectCard';
import { pastProjects } from '@/data';

const Projects = () => {
  return (
    <div className="w-full mt-16 mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#06FCD8] mb-8">
        Projects
      </h2>
      
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            desc={project.desc}
            path={project.path}
            video={project.video}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
