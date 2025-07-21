import AnimatedSection from "@/components/AnimatedSection.tsx";

const Services: React.FC = () => {
    return (
        <section id="services" className=" py-5 bg-gray-50 ">
            <div className="items-center ">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection animation="slideUp">
                        <div className="text-center mb-10 sm:mb-16">
                            <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb- sm:mb-2">
                                My Services
                            </h2>
                            <p className="text-sm sm:text-sm text-gray-600 max-w-3xl mx-auto px-4">
                                What I Offer
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-10">
                        {/* Web Development */}
                        <AnimatedSection animation="slideUp" delay={200}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div
                                    className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold mb-1  text-center">Web
                                    Development</h2>
                                <p className="text-gray-900 text-sm text-center mb-4">
                                    Custom websites & web apps
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Responsive design for all devices
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Modern frameworks (React)
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Performance optimization
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>


                        {/* API Development */}
                        <AnimatedSection animation="slideUp" delay={400}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div
                                    className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold mb-1  text-center">API
                                    Development</h2>
                                <p className="text-gray-900  text-center text-sm mb-4">
                                    Robust and scalable APIs
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        RESTful API design
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        GraphQL implementation
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        API documentation
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Consulting & Training */}
                        <AnimatedSection animation="slideUp" delay={600}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div
                                    className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold mb-1 text-center">Consulting &
                                    Training</h2>
                                <p className="text-gray-900 text-sm text-center mb-4">
                                    Expert advice and training
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Technical consulting
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Team workshops
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black mr-2"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Code reviews and audits
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection animation="slideUp" delay={800} className="">
                        <div className="mt-1  text-center">
                            <h2 className="text-2xl font-semibold mb-1">Ready to start a project?</h2>
                            <p className="text-gray-700 mb-6">
                                Let's discuss how I can help bring your ideas to life.
                            </p>
                            <a href="/contact"
                               className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Services;
