import { ExperienceCard } from './card';

export function Experience() {
    const experiences = [
        {
            title: "Incoming Cloud Software Engineer Co-op",
            company: "MORSE Corp",
            period: "October 2025 - Present",
            description: [
                "January 2026 - June 2026 (Expected)"
            ]
        },
        {
            title: "DevOps Software Engineer Co-op",
            company: "Wolters Kluwer",
            period: "January 2025 - August 2025",
            description: [
                "Designed and implemented cloud infrastructure across Azure and GCP using Terraform while building and maintaining CI/CD pipelines across 15+ different environments to support 99.99+% uptime",
                "Managed Kubernetes cluster services including Argo CD  and Linkerd alongside application deployments; Used Helm charts and Bash/Python scripts to automate manual configuration steps",
                "Expanded custom Kubernetes controller written in Go in conjunction with the Operator SDK to automate secret retrieval, namespace annotation, and Argo CD configuration, cutting cluster configuration time by 40%",
                "Collaborated across 10+ development/DevOps teams to assist app releases, plan projects, and remediate incidents",
                "Created an Azure logic app integrated with the Slack/Office365 API to notify our team of any new public-facing infrastructure that gets provisioned", 
                "Refactored legacy Terraform call sites and moved still-relevant code into existing modules",
                "Improved error messages and unit testing across our Helm charts to account for complex, layered configuration that previously made debugging difficult",
                "Configured Kubernetes-hosted Jenkins instance to reload on any changes made to secrets or config maps containing configuration-as-code details",
                "Pioneered proof-of-concept implementation of atlantis (https://github.com/runatlantis/atlantis) in our repositories to check for unapplied changes to infrastructure",
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Khoury College",
            period: "June 2024 - December 2024",
            description: [
                "Led development of module-based learning platform with 500+ MAU used by Northeastern University students and faculty, built with Next.js, Tailwind CSS, PostgreSQL, and Strapi CMS (see the repo [here](https://github.com/KhourySpecialProjects/odyssey) and the live site [here](https://khouryodyssey.org/))",
                "Architected Kubernetes-based production environment for reliability and autoscaling using AWS (EKS, RDS, S3)", 
                "Implemented CI/CD pipelines for staging and development workflows utilizing GitHub Actions",
                "Engineered a responsive content-creation portal serving 50+ staff contributors, cutting content delivery timeline by 60%",
                "Generated thorough system architecture diagrams and documentation for the platform, reducing ramp-up time for new contributors by 60%",
                "Created containerized local development environment using Docker Compose for easy setup and testing",
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