import { ExperienceCard } from './card';

export function Experience() {
    const experiences = [
        {
            title: "DevOps Software Engineer Co-op",
            company: "Wolters Kluwer",
            period: "January 2025 - Present",
            description: [
                "Designing and implementing the creation of cloud infrastructure across 15+ different environments using Terraform",
                "Collaborating across 10+ development/DevOps teams to align projects, releases, and patches",
                "Managing applications, services, and automatiuons on Kubernetes clusters using custom Helm charts and Argo CD",
                "Building and maintaining CI/CD pipelines and batch job orchestrations across Azure and AWS", 
                "Refactored custom Kubernetes controller written in Go to align with the Kubernetes API standard of conditions",
                "Created an Azure logic app integrated with the Slack/Office365 API to notify our team of any new public-facing infrastructure that gets provisioned", 
                "Consolidated legacy Terraform configuration and moved still-relevant code into existing modules",
                "Improved error messages across our Helm charts to account for complex, layered configuration that previously made debugging difficult",
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