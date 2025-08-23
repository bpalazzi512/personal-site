import { ExperienceCard } from './card';

export function Experience() {
    const experiences = [
        {
            title: "DevOps Software Engineer Co-op",
            company: "Wolters Kluwer",
            period: "January 2025 - August 2025",
            description: [
                "Designed and implemented the creation of cloud infrastructure across Azure and GCP using Terraform while maintaining and building CI/CD pipelines across 15+ different environments",
                "Managed Kubernetes cluster services like ExternalDNS, cert-manager, External Secrets Operator, and Linkerd alongside application deployments using Helm charts and Argo CD to eliminate manual configuration",
                "Expanded custom Kubernetes controller written in Go in conjunction with the Operator SDK to automate secret retrieval, namespace annotation, and Argo CD configuration",
                "Collaborated across 10+ development/DevOps teams to assist app releases, plan projects, and remediate incidents",
                "Created an Azure logic app integrated with the Slack/Office365 API to notify our team of any new public-facing infrastructure that gets provisioned", 
                "Refactored legacy Terraform call sites and moved still-relevant code into existing modules",
                "Improved error messages and unit testing across our Helm charts to account for complex, layered configuration that previously made debugging difficult",
                "Configured Kubernetes-hosted Jenkins instance to reload on any changes made to secrets or config maps containing configuration-as-code details",
                "Pioneered proof-of-concept implementation of atlantis (https://github.com/runatlantis/atlantis) in our repositories to check for unapplied changes to infrastructure",
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
        <div id="experience" className='min-h-screen scroll-mt-25 mt-20 md:mt-0 w-11/12 lg:w-4xl bg-white'>
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