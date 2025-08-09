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
        title: "Roadar",
        description: "A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern's student-run HackBeanpot.",
        githubLink: "espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Go", "Typescript", "React Native", "Expo", "MongoDB", "Websockets", "Apple OAuth"],
        color: "roadar",
        timeRange: "February 2025"
    },
    {
        title: "Pulse",
        description: "A social media for text-based posts about anything and everything, but posts with net-negative votes are deleted. Built for my Tech & Human Values (philosophy) final project. Read [here](https://docs.google.com/document/d/1OyLA9VlOWuNJmvQd-5xLWiY3LMPJNkA-FrffOw_XBno/edit?tab=t.0) to see how it relates to philosophy.",
        githubLink: "https://www.espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Typescript", "React", "NestJS", "PostgreSQL"],
        color: "pulse",
        timeRange: "Nov 2024 - Dec 2024"
    },
    {
        title: "Context",
        description: "A travel platform to match people with their ideal EU country using their own preferences. Built for Northeastern University's Data in Government summer program in Leuven, Brussels.",
        githubLink: "espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Python", "Flask", "Streamlit", "Pandas", "NumPy", "Plotly", "PostgreSQL", "Docker"],
        color: "context",
        timeRange: "May 2024 - Jun 2024"
    },
    {
        title: "Content-Aware Image Compression",
        description: "Image compression tool that reduces the resolution of pictures while preserving the main content by removing the least significant seam of pictures. Built for Northeastern's CS2510 class.",
        githubLink: "asdf", // Replace with actual GitHub link 
        liveLink: "asdf", // Replace with actual live link if available
        pillTitles: ["Java", "JUnit", "GUI"],
        color: "image-compression",
        timeRange: "March 2024 - April 2024"
    }
];


export function Projects() {
    return (
        <div id="projects" className='min-h-screen scroll-mt-25 mt-20 w-11/12 lg:w-4xl'>
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


