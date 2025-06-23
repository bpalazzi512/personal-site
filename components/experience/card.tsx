interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
    return (
        <div className='border border-slate-300 rounded-lg p-4 w-11/12 lg:w-full'>
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
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
