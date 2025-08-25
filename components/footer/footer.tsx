import { Github, LinkedinIcon } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-20">
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
                <div className="flex flex-row space-x-6">
                    <a 
                        href="https://www.linkedin.com/in/robert-palazzi/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform duration-100 hover:scale-110'
                    >
                        <LinkedinIcon color='#0a66c2' size={32}/>
                    </a>

                    <a 
                        href="https://www.github.com/bpalazzi512" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform duration-100 hover:scale-110'
                    >
                        <Github color='#2b3137' size={32} />
                    </a>
                </div>
                
                <div className="text-center text-gray-500 text-sm">
                    <p>© 2025 Bobby Palazzi. Built with Next.js and Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
} 