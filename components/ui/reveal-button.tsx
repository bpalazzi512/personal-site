'use client';
import { useState } from 'react';

interface RevealButtonProps {
    value: string;
    label: string;
    isLink?: boolean;
    linkHref?: string;
}

export function RevealButton({ value, label, isLink = false, linkHref }: RevealButtonProps) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className='flex flex-row items-center space-x-3 h-10'>
            <p className='text-gray-600 text-lg'>{label}:</p>
            <div className='w-56 flex justify-center'>
                {!isRevealed ? (
                    <button
                        onClick={() => setIsRevealed(true)}
                        className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-200 text-gray-700 font-medium"
                    >
                        Reveal
                    </button>
                ) : (
                    isLink && linkHref ? (
                        <a 
                            href={linkHref} 
                            className='text-gray-600 text-lg font-bold hover:underline'
                        >
                            {value}
                        </a>
                    ) : (
                        <span className='text-gray-600 text-lg font-bold'>{value}</span>
                    )
                )}
            </div>
        </div>
    );
}
