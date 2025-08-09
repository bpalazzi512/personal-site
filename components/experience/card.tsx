interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
    // Function to parse markdown-like links [text](url)
    const parseDescription = (text: string) => {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(text)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
                parts.push(text.slice(lastIndex, match.index));
            }
            
            // Add the link
            parts.push(
                <a 
                    key={match.index}
                    href={match[2]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold underline hover:opacity-80 transition-transform duration-100 hover:scale-105"
                >
                    {match[1]}
                </a>
            );
            
            lastIndex = match.index + match[0].length;
        }
        
        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }
        
        return parts.length > 0 ? parts : text;
    };
    return (
        <div className='border border-slate-300 rounded-lg p-4 w-11/12 lg:w-full shadow-md hover:shadow-lg transition-all duration-300'>
            <div className='w-full flex flex-row items-center justify-between'>
                <div className='w-full'>
                    <h2 className='font-bold'>{title}</h2>
                    <h3 className='text-gray-500 mb-2'>{company}</h3>
                    <h4 className='border border-slate-300 w-fit px-2.5 py-1 rounded-full text-sm'>{period}</h4>
                </div>
            </div>
            <div className="w-full">
                <div className='flex w-full'>
                    <ul className='list-disc ml-4 flex-1 mt-4 space-y-1.5'>
                        {description.map((item, index) => (
                            <li key={index}>{parseDescription(item)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
