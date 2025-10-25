import { ProjectCard } from "./project";
import { fontTheme } from '@/lib/types';

interface Project {
    title: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    pillTitles: string[];
    color: fontTheme;
    timeRange: string;
}

const projects : Project[]= [
    {
        title: "DubOps",
        description: "An AI-powered DevOps Automation platform that uses AWS Bedrock to to analyze GitHub repos and automatically generate AWS Infrastrucutre as Code (IaC) configurations with Terraform and Docker. Won 1st prize for best use of AI (AWS Track) at University of Washington's DubHacks 2025.",
        githubLink: "",
        liveLink: "https://devpost.com/software/dubops?_gl=1*e717zm*_gcl_au*MTgyNTg5NDgwNS4xNzYwODE4NTI5*_ga*MTI2MzY4MTYxMS4xNzYwODE4NTI5*_ga_0YHJK3Y10M*czE3NjEwMDUxMDAkbzYkZzEkdDE3NjEwMDUxNjMkajU5JGwwJGgw",
        pillTitles: ["TypeScript", "React", "Next.js", "Python", "Flask",
        "AWS Bedrock", "Terraform", "Docker"],
        color: "dubops",
        timeRange: "October 2025 - Present"
    },
    {
        title: "Roadar",
        description: "A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern's student-run HackBeanpot.",
        githubLink: "https://github.com/abhikaboy/roadar", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Go", "Typescript", "React Native", "Expo", "MongoDB", "Websockets", "Apple OAuth"],
        color: "roadar",
        timeRange: "February 2025"
    },
    {
        title: "Pulse",
        description: "A social media for text-based posts about anything and everything, but posts with net-negative votes are deleted. Built for my Tech & Human Values (philosophy) final project. Read [here](https://docs.google.com/document/d/1OyLA9VlOWuNJmvQd-5xLWiY3LMPJNkA-FrffOw_XBno/edit?tab=t.0) to see how it relates to philosophy.",
        githubLink: "https://github.com/bpalazzi512/Pulse", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Typescript", "React", "NestJS", "PostgreSQL"],
        color: "pulse",
        timeRange: "Nov 2024 - Dec 2024"
    },
    {
        title: "Context",
        description: "A travel platform to match people with their ideal EU country using their own preferences. Built for Northeastern University's Data in Government summer program in Leuven, Brussels.",
        githubLink: "https://github.com/bpalazzi512/CONTEXT", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Python", "Flask", "Streamlit", "Pandas", "NumPy", "Plotly", "PostgreSQL", "Docker"],
        color: "context",
        timeRange: "May 2024 - Jun 2024"
    },
    {
        title: "Content-Aware Image Compression",
        description: "Image compression tool that reduces the resolution of pictures while preserving the main content by removing the least significant seam of pictures. Built for Northeastern's CS2510 class.",
        // githubLink: "asdf", // Replace with actual GitHub link 
        // liveLink: "asdf", // Replace with actual live link if available
        pillTitles: ["Java", "JUnit", "GUI"],
        color: "image-compression",
        timeRange: "March 2024 - April 2024"
    }
];


export function Projects() {
    return (
        <div id="projects" className='min-h-screen scroll-mt-25 mt-20 w-11/12 lg:w-4xl bg-white'>
            <div className="w-full text-left mb-10">
                <h1 className="font-extrabold text-3xl underline underline-offset-8 decorationblue-500">PROJECTS</h1>
            </div>
            <div className='w-full h-full flex flex-row items-center justify-center flex-wrap'> 
                {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            pillTitles={project.pillTitles}
                            color={project.color}
                            timeRange={project.timeRange}
                        />
                    
                ))} 
            </div>
        </div>
    );
}


