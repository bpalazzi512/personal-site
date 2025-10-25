

interface ProjectCardProps {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    pillTitles: string[];
    color: fontTheme;
    timeRange: string;
}
import React from 'react';
import { Github, Link2Icon } from "lucide-react";
import { PillGroup } from "./pill-group";
import { fontTheme } from '@/lib/types';

export function ProjectCard({ title, description, githubLink, liveLink, pillTitles, color, timeRange } : ProjectCardProps) {
    // Function to parse markdown-like links [text](url)
    const parseDescription = (text: string) => {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(text)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                parts.push(text.slice(lastIndex, match.index));
            }
            
            // Add the link
            parts.push(
                <a 
                    key={match.index}
                    href={match[2]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${textColor} underline hover:opacity-80 transition-transform duration-100 hover:scale-109`}
                >
                    {match[1]}
                </a>
            );
            
            lastIndex = match.index + match[0].length;
        }
        
        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }
        
        return parts.length > 0 ? parts : text;
    };

    let textColor: string;
    let borderColor;
    let shadowColor;
    switch (color) {
        case "dubops":
            textColor = "text-dubops";
            borderColor = "border-dubops";
            shadowColor = "shadow-dubops";
            break;
        case "roadar":
            textColor = "text-roadar";
            borderColor = "border-roadar";
            shadowColor = "shadow-roadar";
            break;
        case "context":
            textColor = "text-context";
            borderColor = "border-context";
            shadowColor = "shadow-context";
            break; 
        case "pulse":
            textColor = "text-pulse";
            borderColor = "border-pulse";
            shadowColor = "shadow-pulse";
            break;
        case "image-compression":
            textColor = "text-image-compression";
            borderColor = "border-image-compression";
            shadowColor = "shadow-image-compression";
            break;
        default:
            textColor = "text-roadar";
            borderColor = "border-roadar";
            shadowColor = "shadow-roadar";
            break;
    }
    return (
        <div className={`max-w-full md:max-w-[430px] min-h-[400px] p-3 rounded-md m-2 flex flex-col justify-between border-2 ${borderColor} shadow-md ${shadowColor} hover:shadow-lg transition-all duration-300 `}>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center justify-between space-x-4 ">
                    <h1 className={`text-xl ${textColor} font-bold`}>{title}</h1>
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Github size={30} className={`transition-transform duration-100 hover:scale-109 ${textColor}`}/>
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            <Link2Icon size={30} className={` ${textColor} transition-transform duration-100 hover:scale-109`} />
                        </a>
                    )}
                </div>
                <div className="text-sm px-2 py-1 border border-slate-300 rounded-xl w-fit">
                    <p className="text-gray-500">{timeRange}</p>
                </div>
            </div>
            <p className="text-gray-500">{parseDescription(description)}</p>
            <PillGroup pillTitles={pillTitles} fontTheme={color} />
        </div>
    );
}