import { Header } from "@/components/header/header";
import { Experience } from "@/components/experience/experience";
import { About } from "@/components/about/about";
import { Projects } from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    
    <>
      <div className="w-full h-full flex flex-col items-center justify-center" style={{background: "linear-gradient(135deg, #0f1726 0%, #2b2b42 15%, #3d4e81 30%, #1c2541 45%, #0a0c17 60%, #272e45 75%, #3d4e81 90%, #1c2541 100% )"}}>
        <Header/>
        <About/>
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}
