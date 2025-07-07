

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    pillTitles: string[];
    color: fontTheme;
}
import React from 'react';
import { Github, Link2Icon } from "lucide-react";
import { PillGroup } from "./pill-group";
import { fontTheme } from '@/lib/types';

export function ProjectCard({ title, description, githubLink, liveLink, pillTitles, color } : ProjectCardProps) {
    const borderColor = "border-" + color;
    return (
        <div className={`max-w-full md:max-w-5/12 min-h-[300px] p-3 rounded-md m-2 flex flex-col justify-between border ${borderColor}`}>
            <div className="flex flex-row items-center space-x-4">
                <h1 className="text-xl text-white">{title}</h1>
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className='transition-transform duration-100 hover:scale-109' color='white'/>
                    </a>
                )}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <Link2Icon className="transition-transform duration-100 hover:scale-109" />
                    </a>
                )}
            </div>
            <p className="text-gray-200">{description}</p>
            <PillGroup pillTitles={pillTitles} fontTheme={color} />
        </div>
    );
}