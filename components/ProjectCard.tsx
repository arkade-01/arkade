"use client";

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  desc: string;
  path: string;
  video?: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, desc, path, video, tags }) => {
  return (
    <div className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#06FCD8] transition-all duration-300 hover:shadow-lg hover:shadow-[#06FCD8]/10">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-[#06FCD8] transition-colors">
          {name}
        </h3>
        <div className="flex gap-2">
          {video && (
            <Link 
              href={video} 
              target="_blank"
              className="text-[#9a9a9a] hover:text-[#06FCD8] transition-colors"
              title="Watch demo"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </Link>
          )}
          <Link 
            href={path} 
            target="_blank"
            className="text-[#9a9a9a] hover:text-[#06FCD8] transition-colors"
            title="Open project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
      
      <p className="text-[#9a9a9a] text-sm mb-4">{desc}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx}
            className="text-xs px-2 py-1 rounded-full bg-[#2a2a2a] text-[#06FCD8]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
