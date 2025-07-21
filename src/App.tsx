// import Services from './pages/Services';
// import Contact from './pages/Contact';
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import About from "@/components/About.tsx";

const App = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <About/>
        </div>
    );
};

export default App;
