

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
    let bgTextColor;
    let borderColor;
    let shadowColor;
    switch (color) {
        case "roadar":
            bgTextColor = "text-roadar";
            borderColor = "border-roadar";
            shadowColor = "shadow-roadar";
            break;
        case "context":
            bgTextColor = "text-context";
            borderColor = "border-context";
            shadowColor = "shadow-context";
            break; 
        case "pulse":
            bgTextColor = "text-pulse";
            borderColor = "border-pulse";
            shadowColor = "shadow-pulse";
            break;
        case "image-compression":
            bgTextColor = "text-image-compression";
            borderColor = "border-image-compression";
            shadowColor = "shadow-image-compression";
            break;
        default:
            bgTextColor = "text-roadar";
            borderColor = "border-roadar";
            shadowColor = "shadow-roadar";
            break;
    }
    return (
        <div className={`max-w-full md:max-w-5/12 min-h-[300px] p-3 rounded-md m-2 flex flex-col justify-between border-2 ${borderColor} shadow-md ${shadowColor} hover:shadow-lg transition-all duration-300`}>
            <div className="flex flex-row items-center space-x-4">
                <h1 className={`text-xl ${bgTextColor} font-bold`}>{title}</h1>
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
            <p className="text-gray-500">{description}</p>
            <PillGroup pillTitles={pillTitles} fontTheme={color} />
        </div>
    );
}