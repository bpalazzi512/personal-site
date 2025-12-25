"use client"
import { Github, LinkedinIcon, ChevronDown } from 'lucide-react';
import headshot from '../../public/headshot-no-bg.png';
import Image from 'next/image'
import { WavyUnderline } from '../ui/wavy-underline';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

export function About() {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const isWinter = new Date().getMonth() < 2 || new Date().getMonth() > 10; // 0 = January, 1 = February, 11 = December

    useEffect(() => {
        const handleScroll = () => {
            // Hide the indicator permanently once user scrolls past a small threshold
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
                // Remove the event listener since we no longer need it
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        {isWinter && <Snowfall color="#9bbfd4" style={{ zIndex: 1000 }}/>}
        <div id="about" className="min-h-screen w-full flex flex-col items-center max-w-3xl scroll-mt-15 relative bg-white">
            <Image src={headshot} alt="" className="rounded-full object-cover w-60 h-60 border-2 border-gray-400 mt-12"/>
            <h1 className="font-semibold text-3xl mt-2">Hi, I&apos;m Bobby</h1>
            
            <h2 className="px-4 mt-4 text-center">
                I&apos;m a 3rd year Computer Science and Math student at Northeastern University with a passion for problem solving and learning. I love building whatever I can think of. I&apos;m most interested in cloud infrastructure - a passion I found while on co-op at Wolters Kluwer. Outside of my technical interests, you can find me in the gym, listening to music, or running obstacle course races (shoutout <a href="https://www.instagram.com/eliteheatnu/" target="_blank" rel="noopener noreferrer" className="underline">Elite Heat</a>).
            </h2>
            <div className="flex flex-row mt-6 p-4 min-w-36 justify-between">
                <a href="https://www.linkedin.com/in/robert-palazzi/" target="_blank" rel="noopener noreferrer" className='transition-transform duration-100 hover:scale-110'>
                    <LinkedinIcon color='#0a66c2' size="40px"/>
                </a>

                <a href="https://github.com/bpalazzi512" target="_blank" rel="noopener noreferrer" className='transition-transform duration-100 hover:scale-110'>
                    <Github color='#2b3137' size="40px" />
                </a>
                
                
            </div>
            <a 
                href="/resume.pdf" 
                download="Palazzi_Resume.pdf"
                className="px-3 py-1 rounded-md h-12 flex items-center justify-center mt-4 relative group"
            >
                <h3 className="text-black text-lg">
                    <WavyUnderline className="space-y-1 transition-transform duration-100 hover:scale-110"> 
                        <p className="">Download My Resume</p>
                    </WavyUnderline>
                </h3>
            </a>
            
            {/* Scroll down indicator - only show on larger screens */}
            {showScrollIndicator && (
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce transition-opacity duration-300 hidden lg:flex">
                    <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
                    <div className="relative">
                        <ChevronDown 
                            size={32} 
                            className="text-gray-600 animate-ping absolute inset-0" 
                        />
                        <ChevronDown 
                            size={32} 
                            className="text-gray-600" 
                        />
                    </div>
                </div>
            )}
        </div>
        </>
    )
}