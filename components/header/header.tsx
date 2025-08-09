'use client';
import { useEffect, useState } from 'react';

export function Header() {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolling, setIsScrolling] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [isAtTop, setIsAtTop] = useState(true);



    useEffect(() => {
        const sections = ['about', 'experience', 'projects', 'contact'];
        
        // Function to determine which section is currently most visible
        const getCurrentSection = () => {
            const scrollPosition = window.scrollY + 150; // Account for header height
            
            let currentSection = 'about'; // default
            
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    
                    // If scroll position is within this section
                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        currentSection = sectionId;
                        break;
                    }
                    // If we're past this section but haven't reached the next one
                    else if (scrollPosition >= elementTop) {
                        currentSection = sectionId;
                    }
                }
            }
            
            return currentSection;
        };

        const handleScroll = () => {
            if (isScrolling) return;
            
            const currentSection = getCurrentSection();
            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolling, activeSection]);

    useEffect(() => {
        const activeElement = document.querySelector(`[href="#${activeSection}"]`);
        if (activeElement) {
            const { offsetLeft, offsetWidth } = activeElement as HTMLElement;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [activeSection]);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };

        // Check initial position
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        
        if (isScrolling) return;

        const element = document.getElementById(section.toLowerCase());
        if (element) {
            setIsScrolling(true);
            setActiveSection(section.toLowerCase());
            
            const targetScrollY = Math.max(element.offsetTop - 100, 0); // Account for header
            console.log("targetScrollY", targetScrollY);
            
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });

            // Check when scroll animation finishes by monitoring scroll position
            const checkScrollComplete = () => {
                const currentScroll = window.scrollY;
                const tolerance = 10; // Allow small differences
                
                if (Math.abs(currentScroll - targetScrollY) <= tolerance) {
                    setIsScrolling(false);
                } else {
                    requestAnimationFrame(checkScrollComplete);
                }
            };
            
            // Start checking after a small delay to let animation begin
            setTimeout(() => {
                requestAnimationFrame(checkScrollComplete);
            }, 100);
        }
    };

    return (
        <header className={`w-full sticky top-0 bg-white z-50 transition-shadow duration-300 ${!isAtTop ? 'shadow-sm' : ''}`}>
            <nav className="w-full flex justify-center items-center space-x-8 p-4 relative">
                {['About', 'Experience', 'Projects', 'Contact'].map((section) => (
                    <a
                        key={section}
                        href={`#${section.toLowerCase()}`}
                        onClick={(e) => handleClick(e, section)}
                        className={`transition-all duration-200 cursor-pointer ${
                            activeSection === section.toLowerCase() 
                            ? 'font-bold text-black' 
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        {section}
                    </a>
                ))}
                <div
                    className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />
            </nav>
        </header>
    );
}