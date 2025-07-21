// import Services from './pages/Services';
// import Contact from './pages/Contact';
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import About from "@/components/About.tsx";
import Skills from "@/pages/Skills.tsx";
import Services from "@/pages/Services.tsx";

const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <About/>
            <Skills/>
            <Services/>
        </div>
    );
};

export default App;
