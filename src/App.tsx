import { AppHeader } from "./components/AppHeader/AppHeader";
import { Hero } from "./components/Hero/Hero";
import { Technologies } from "./components/Technologies/Technologies";
import { Experiences } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Educations } from "./components/Educations/Educations";

export function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <AppHeader />
        <Hero />
        <Technologies />
        <Experiences />
        <Educations />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
