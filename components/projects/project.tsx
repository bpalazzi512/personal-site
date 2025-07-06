

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    pillTitles: string[];
    backgroundColor: string;
}
import React from 'react';
import { Github, Link2Icon } from "lucide-react";
import { PillGroup } from "./pill-group";

export function ProjectCard({ title, description, githubLink, liveLink, pillTitles, backgroundColor } : ProjectCardProps) {
    return (
        <div className={`max-w-full min-h-[300px] p-3 rounded-md m-2 flex flex-col justify-between ${backgroundColor}`}>
            <div className="flex flex-row items-center space-x-4">
                <h1 className="text-xl text-white">{title}</h1>
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className='transition-transform duration-100 hover:scale-109' />
                    </a>
                )}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <Link2Icon className="transition-transform duration-100 hover:scale-109" />
                    </a>
                )}
            </div>
            <p className="text-gray-200">{description}</p>
            <div className="flex flex-row space-x-2
 space-y-2 flex-wrap">
                {pillTitles.map((title, index) => (
                    <span key={index} className={`px-2 py-1 rounded-full text-xs font-semibold ${backgroundColor}`}>{title}</span>
                ))}
            </div>
        </div>
    );
}