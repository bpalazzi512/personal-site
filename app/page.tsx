import { Header } from "@/components/header/header";
import { Experience } from "@/components/experience/experience";
import { About } from "@/components/about/about";
import { Projects } from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header/>
      <div className="w-full flex flex-col items-center">
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}
