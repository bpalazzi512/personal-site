import { Github, Link2Icon } from "lucide-react";
import { Pill } from "./pill";
import { PillGroup } from "./pill-group";


export const Projects = () => {
    return (
        <div className="min-h-screen w-full mt-10 ">
            <h1 className="font-extrabold text-xl">PROJECTS</h1>
            
            <div className="max-w-full min-h-[300px] p-3 bg-roadar rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Roadar</h1> 
                
                </div>
                <p className="text-gray-300">A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern&apos;s student-run HackBeanpot.  </p>
                <PillGroup pillTitles={["Go", "Typescript", "React Native", "Expo", "MongoDB", "Websockets", "Apple OAuth"]} fontTheme="text-roadar"/>
                
            </div>
            <div className="max-w-full min-h-[300px] p-3 bg-pulse rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Pulse</h1> 
                
                </div>
                <p className="text-gray-200">A social media for text-based posts about anything and everything, but posts with net-negative votes are deleted. Built for my Tech & Human Values (philosophy) final project. Read here to see how it relates to philosophy.</p>
                <PillGroup pillTitles={["Typescript", "React", "NestJS", "PostgreSQL"]} fontTheme="text-pulse"/>
            </div>

            <div className="max-w-full min-h-[300px] p-3 bg-[#107db6] rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-x text-white">Context</h1> 
                </div>
                <p className="text-gray-200">A travel platform to match people with their ideal EU country using their own preferences. Built for Northeastern University&apos;s Data in Government summer program in Leuven, Brussels.</p>
                <PillGroup pillTitles={["Python", "Flask", "Streamlit", "Pandas", "NumPy", "Plotly", "PostgreSQL", "Docker"]} fontTheme="text-context"/>
                
            </div>
            <div className="max-w-full min-h-[300px] p-3 bg-[#3a7859] rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Content-Aware Image Compression</h1> 
                    <Link2Icon className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-200">Image compression tool that reduces the resolution of pictures while preserving the main content by removing the least significant seam of pictures. Built for Northeastern&apos;s CS2510 class.</p>
                <div className="flex flex-row space-x-2 space-y-2 flex-wrap">
                    <Pill title="Java" fontTheme="context"/>
                    <Pill title="JUnit" fontTheme="context"/>
                    <Pill title="GUI" fontTheme="context"/>
                    
                </div>
            </div>
            
            
            
        </div>
    );
};


