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
                "Developed new and updated existing features in module-based learning platform, including a customized content creation portal, role-based access control, and group management using Next.js, Tailwind CSS, and Strapi CMS (see the repo [here](https://github.com/KhourySpecialProjects/odyssey) and the live site [here](https://khouryodyssey.org/))",
                "Implemented CI/CD pipelines using GitHub Actions for staging and production workflows",
                "Containerized system services with Docker, migrated application to AWS EKS for efficient testing and scaling",
                "Generated thorough system architecture diagrams and documentation for the platform, reducing ramp-up time for new contributors"
            ]
        }, 
        {
            title: "Argos Software Developer",
            company: "Northeastern Electric Racing",
            period: "Jan 2024 - Dec 2024",
            description: [
                "Collaborated on development of a full-stack web application using Node.js and Express.js with TypeScript that displays live telemetry data received via a controller area network (CAN) bus",
                "Designed and implemented AngularJS components that display data fed thorugh Socket.IO websockets",
                "Created asynchronous pipeline of mock telemtry data, allowing efficient testing of new components",
            ]
        }
    ];

    return (
        <div id="experience" className='min-h-screen scroll-mt-25 mt-20 md:mt-0 w-11/12 lg:w-4xl'>
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