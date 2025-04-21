import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Projects = () => {
    return (
        <div className="min-h-screen w-full mt-10">
            <h1 className="font-extrabold text-xl">Projects</h1>
            
            <div className="max-w-full min-h-[300px] p-2 bg-gray-100 rounded-md m-2">
                <div className="flex flex-row items-center space-x-4">
                    <h1 className="text-xl">Roadar</h1> 
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "black"}}/>
                    <a href="">Demo</a>
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


