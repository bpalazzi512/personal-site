'use client';
import React, { useEffect, useState } from 'react';

interface WavyUnderlineProps {
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
}

export function WavyUnderline({ children, className = '', hover = false }: WavyUnderlineProps) {
    
    const [isHovered, setIsHovered] = useState(false);
    const [hideUnderline, setHideUnderline] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);  
    }

    useEffect(() => {
        if (hover) {
            setHideUnderline(!isHovered);
        } else {
            setHideUnderline(false);
        }
    }, [isHovered, hover]);

    return (
        <div className={`relative inline-block ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}

            {!hideUnderline && (
                <svg
                    className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,10 C25,-5 25,25 50,10 C75,-5 75,25 100,10 C125,-5 125,25 150,10 C175,-5 175,25 200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="9"
                    className="animate-wave"
                    />
                </svg>
            )}
        </div>
    );
} 