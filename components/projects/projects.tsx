import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Github } from "lucide-react";
import { Pill } from "./pill";


export const Projects = () => {
    return (
        <div className="min-h-screen w-full mt-10">
            <h1 className="font-extrabold text-xl">PROJECTS</h1>
            
            <div className="max-w-full min-h-[300px] p-3 bg-[#082A74] rounded-md m-2 flex flex-col justify-between">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl  text-white">Roadar</h1> 
                    <Github className="transition-transform duration-100 hover:scale-109" color="white"/>
                
                </div>
                <p className="text-gray-300">A crowdsourced roadside assistance mobile app with the aim of connecting mechanics with stranded passengers. Built in 36 hours for Northeastern&apos;s student-run HackBeanpot.  </p>
                <div className="flex flex-row space-x-2 space-y-2 flex-wrap">
                    <Pill title="Go"/>
                    <Pill title="Typescript"/>
                    <Pill title="React Native"/>
                    <Pill title="Expo"/>
                    <Pill title="MongoDB"/>
                    <Pill title="Websockets"/>
                    <Pill title="Apple OAuth"/>
                    
                </div>
            </div>
            <div className="max-w-full min-h-[300px] p-2 bg-gray-100 rounded-md m-2">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl">Pulse</h1> 
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "black"}}/>
                    <a href="">Demo</a>
                </div>
            </div>
            <div className="max-w-full min-h-[300px] p-2 bg-gray-100 rounded-md m-2">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl">Context</h1> 
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "black"}}/>
                    <a href="">Demo</a>
                </div>
            </div>
            <div className="max-w-full min-h-[300px] p-2 bg-gray-100 rounded-md m-2">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl">Content-Aware Image Compression</h1> 
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "black"}}/>
                    <a href="">Demo</a>
                </div>
            </div>
            
        </div>
    );
};


