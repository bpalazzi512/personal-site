import { Header } from "@/components/header/header";
import { Experience } from "@/components/experience/experience";
import { About } from "@/components/about/about";
import { Projects } from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    
    <>
      <div className="w-full h-full flex flex-col items-center justify-center" >
        <Header/>
        <About/>
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}
