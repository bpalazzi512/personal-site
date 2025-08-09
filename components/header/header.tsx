'use client';
import { useEffect, useState } from 'react';

export function Header() {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolling, setIsScrolling] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScrollEnd = () => {
            setIsScrolling(false);
        };

        // Add event listener for scrollend
        window.addEventListener('scrollend', handleScrollEnd);

        // Fallback for browsers that don't support scrollend
        const fallbackTimeout = setTimeout(() => {
            if (!('onscrollend' in window)) {
                let lastKnownScroll = (window as Window).scrollY;
                
                const checkScrollStop = () => {
                    if ((window as Window).scrollY === lastKnownScroll) {
                        setIsScrolling(false);
                    } else {
                        lastKnownScroll = (window as Window).scrollY;
                        setTimeout(checkScrollStop, 100);
                    }
                };

                (window as Window).addEventListener('scroll', () => {
                    if (isScrolling) {
                        lastKnownScroll = (window as Window).scrollY;
                        setTimeout(checkScrollStop, 100);
                    }
                });
            }
        }, 0);

        return () => {
            window.removeEventListener('scrollend', handleScrollEnd);
            clearTimeout(fallbackTimeout);
        };
    }, []);

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

        window.addEventListener('scroll', handleScroll);
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        
        if (isScrolling || activeSection === section.toLowerCase()) return;

        const element = document.getElementById(section.toLowerCase());
        if (element) {
            setIsScrolling(true);
            setActiveSection(section.toLowerCase());
            
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
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