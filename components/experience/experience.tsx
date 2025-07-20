import { ExperienceCard } from './card';

export function Experience() {
    const experiences = [
        {
            title: "DevOps Software Engineer Co-op",
            company: "Wolters Kluwer",
            period: "January 2025 - Present",
            description: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores unde saepe vitae libero ratione necessitatibus consectetur voluptatem velit, sunt quis ipsum, dolorum, a assumenda ea blanditiis earum cupiditate sed?",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis rerum praesentium culpa qui explicabo accusamus. Totam, impedit. Totam temporibus ab sapiente fugiat earum vitae aliquam cumque est, ipsa repellat.",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione ea praesentium! Rem similique praesentium accusantium sint voluptatum ullam veniam possimus quisquam consequatur voluptate minima nostrum odit, molestias mollitia doloremque."
            ]
        },
        {
            title: "Student Innovation Developer",
            company: "Khoury College",
            period: "June 2024 - December 2024",
            description: [
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repellat quaerat odio repudiandae explicabo vel iusto, magni, animi, placeat quidem dolore molestiae laboriosam! Dolor soluta, facilis odit non optio vitae!",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatem consequatur accusamus nisi, magni atque itaque cumque dolorum quibusdam quis error repudiandae, rem minus quae, non eius. Laudantium, nesciunt quod!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deleniti aspernatur. Temporibus animi delectus commodi dolores. A, exercitationem repellendus! Nisi repudiandae quas repellendus laborum dicta soluta labore libero nesciunt distinctio?"
            ]
        }
    ];

    return (
        <div id="experience" className='min-h-screen scroll-mt-25 mt-20 md:mt-0w-11/12 lg:w-4xl'>
            <div className="w-full text-left mb-10">
                <h1 className="font-extrabold text-3xl underline underline-offset-8 decorationblue-500">EXPERIENCE</h1>
            </div>

            <div className='w-full h-full flex flex-col items-center justify-center space-y-6'> 
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        title={experience.title}
                        company={experience.company}
                        period={experience.period}
                        description={experience.description}
                    />
                ))}
            </div>
        </div>
    )
}