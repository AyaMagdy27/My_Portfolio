import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero"
import About from "./Component/about"
import TechIcons from "./Component/TechIcons"
import Experience from "./Component/Experience"
import Eduction from "./Component/Eduction"
import Skills from "./Component/Skills"
import Certification from "./Component/Certification"
import Contact from "./Component/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-purple-200">  
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-bg-sp bg-[radial-gradient(100%_50%_at_50%_0%,rgba(153,102,255,0.1)_0%,rgba(153,102,255,0)_60%)]"></div>
      </div>
      <div className="fixed top-0 z-50 h-full w-full">
          <Navbar />
        </div>
      <div className="container w-full mx-auto px-8 mt-44">
        <Hero />
        <About />
        <TechIcons />
        <Experience />
        <Skills />
        <Eduction />
        <Certification />
        <Contact />
      </div>
    </div>
  );
};

export default App