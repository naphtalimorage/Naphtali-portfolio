// import {  Menu, X } from 'lucide-react';
import {useMemo, useState, useEffect} from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (sectionId: string) => activeSection === sectionId;

    const navigationItems = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'services', label: 'Service' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ], []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        setActiveSection(sectionId);
    };

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navigationItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        // Set initial active section
        handleScroll();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigationItems]);

    return(
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-44">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex items-center space-x-1">
                        {/*<img src={Logo} alt="Talek Bush Camp Logo"  className="h-10 w-10 sm:h-14 sm:w-14 "/>*/}
                        <div>
                            <h1 className="text-lg sm:text-sm font-bold text-gray-900">Talek Bush Camp</h1>
                            <p className="text-xs sm:text-xm text-gray-600">Masai Mara, Kenya</p>
                        </div>
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        {navigationItems.map(item => (
                            <button
                            key={item.id}
                            className={`relative  font-normal text-sm transition-all duration-300 ${
                                isActive(item.id)
                                    ? 'text-amber-600'
                                    : 'text-gray-700 hover:text-amber-600'
                            }`}
                            >
                                {item.label}
                                {isActive(item.id) && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full transition-all duration-300"></div>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-3 py-3 rounded-md transition-all duration-300 ${
                                            isActive(item.id)
                                                ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-600'
                                                : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{item.label}</span>
                                            {isActive(item.id) && (
                                                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header