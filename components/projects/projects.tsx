import { Github, Link2Icon } from "lucide-react";
import { PillGroup } from "./pill-group";

const projects = [
    {
        title: "Roadar",
        description: "A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern's student-run HackBeanpot.",
        githubLink: "espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Go", "Typescript", "React Native", "Expo", "MongoDB", "Websockets", "Apple OAuth"],
        backgroundColor: "bg-roadar"
    },
    {
        title: "Pulse",
        description: "A social media for text-based posts about anything and everything, but posts with net-negative votes are deleted. Built for my Tech & Human Values (philosophy) final project. Read here to see how it relates to philosophy.",
        githubLink: "espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Typescript", "React", "NestJS", "PostgreSQL"],
        backgroundColor: "bg-pulse"
    },
    {
        title: "Context",
        description: "A travel platform to match people with their ideal EU country using their own preferences. Built for Northeastern University's Data in Government summer program in Leuven, Brussels.",
        githubLink: "espn.com", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Python", "Flask", "Streamlit", "Pandas", "NumPy", "Plotly", "PostgreSQL", "Docker"],
        backgroundColor: "bg-[#107db6]"
    },
    {
        title: "Content-Aware Image Compression",
        description: "Image compression tool that reduces the resolution of pictures while preserving the main content by removing the least significant seam of pictures. Built for Northeastern's CS2510 class.",
        githubLink: "", // Replace with actual GitHub link 
        liveLink: "", // Replace with actual live link if available
        pillTitles: ["Java", "JUnit", "GUI"],
        backgroundColor: "bg-image-compression"
    }
];


export function Projects() {
    return (
        <div id="projects" className='min-h-screen scroll-mt-15 w-11/12 lg:w-4xl'>
            <div className="w-full text-left mb-10">
                <h1 className="font-extrabold text-3xl underline underline-offset-8 decorationblue-500">PROJECTS</h1>
            </div>
            <div className="max-w-full min-h-[300px] p-3 bg-roadar rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Roadar</h1> 
                    <Github className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-300">A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern&apos;s student-run HackBeanpot.  </p>
                <PillGroup pillTitles={["Go", "Typescript", "React Native", "Expo", "MongoDB", "Websockets", "Apple OAuth"]} fontTheme="text-roadar"/>
                
            </div>
            <div className="max-w-full min-h-[300px] p-3 bg-pulse rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Pulse</h1> 
                    <Github className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-200">A social media for text-based posts about anything and everything, but posts with net-negative votes are deleted. Built for my Tech & Human Values (philosophy) final project. Read here to see how it relates to philosophy.</p>
                <PillGroup pillTitles={["Typescript", "React", "NestJS", "PostgreSQL"]} fontTheme="text-pulse"/>
            </div>

            <div className="max-w-full min-h-[300px] p-3 bg-[#107db6] rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-x text-white">Context</h1> 
                    <Github className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-200">A travel platform to match people with their ideal EU country using their own preferences. Built for Northeastern University&apos;s Data in Government summer program in Leuven, Brussels.</p>
                <PillGroup pillTitles={["Python", "Flask", "Streamlit", "Pandas", "NumPy", "Plotly", "PostgreSQL", "Docker"]} fontTheme="text-context"/>
                
            </div>
            <div className="max-w-full min-h-[300px] p-3 bg-image-compression rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Content-Aware Image Compression</h1> 
                    <Link2Icon className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-200">Image compression tool that reduces the resolution of pictures while preserving the main content by removing the least significant seam of pictures. Built for Northeastern&apos;s CS2510 class.</p>
                <div className="flex flex-row space-x-2 space-y-2 flex-wrap">
                    <PillGroup pillTitles={["Java", "JUnit", "GUI"]} fontTheme="text-image-compression"/>
                    
                </div>
            </div>
        </div>
    );
}


