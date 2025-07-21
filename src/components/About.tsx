// import { MapPin, Users, Heart, Award } from 'lucide-react';
import Bushcamp8 from "../assets/bushcamp8.jpg"
import AnimatedSection from './AnimatedSection';
import {MapPin} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
    return (
        <section id="about">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection animation="slideUp">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb- sm:mb-2">
                            About Me
                        </h2>
                        <p className="text-sm sm:text-sm text-gray-600 max-w-3xl mx-auto px-4">
                            Who am I?
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-32  mb-12 sm:mb-16 px-48">
                    <AnimatedSection animation="slideLeft" delay={200}>
                        <img
                            src={Bushcamp8}
                            alt="About Me"
                            className="rounded-2xl shadow-lg max-w-[350px] h-64 sm:h-80 lg:h-full object-cover mb-8"
                        />
                    </AnimatedSection>
                    <div className="w-full sm:w-[500px] lg:w-[460px] ">
                      <div className="flex flex-row space-x-4">
                        <AnimatedSection animation="slideRight" delay={400} className="sm:col-span-2 lg:col-span-1">
                          <div
                              className="bg-white rounded-lg border-1 border-gray-300 p-6 sm:p-4 text-center hover:shadow-xl transition-shadow w-[140px] h-40">
                            <MapPin className="h-5 w-5 sm:h-5 sm:w-5 text-black mx-auto mb-4"/>
                            <h3 className="text-lg sm:text-sm font-bold  mb-2">Experience</h3>
                            <p className="text-sm sm:text-sm text-gray-600">
                              2+ years<br/>working
                            </p>
                          </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slideRight" delay={600} className="sm:col-span-2 lg:col-span-1">
                          <div
                              className="bg-white rounded-lg border-1 border-gray-300 p-6 sm:p-4 text-center hover:shadow-xl transition-shadow w-[140px] h-40">
                            <MapPin className="h-5 w-5 sm:h-5 sm:w-5 text-black mx-auto mb-4"/>
                            <h3 className="text-lg sm:text-sm font-bold  mb-2">Completed</h3>
                            <p className="text-sm sm:text-sm text-gray-600">
                              5+ projects<br/>successfully
                            </p>
                          </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slideRight" delay={800} className="sm:col-span-2 lg:col-span-1">
                          <div
                              className="bg-white rounded-lg border-1 border-gray-300 p-6 sm:p-4 text-center hover:shadow-xl transition-shadow w-[140px] h-40">
                            <MapPin className="h-5 w-5 sm:h-5 sm:w-5 text-black mx-auto mb-4"/>
                            <h3 className="text-lg sm:text-sm font-bold  mb-2">Support</h3>
                            <p className="text-sm sm:text-sm text-gray-600">
                              24/7 support<br/>available
                            </p>
                          </div>
                        </AnimatedSection>
                      </div>
                      <AnimatedSection animation="slideRight" delay={1000} className="sm:col-span-2 lg:col-span-1">
                        <div className="mt-8 sm:mt-12 ">
                          <p className="text-gray-600  leading-relaxed w-full">
                            Web developer with expertise in both front-end (React.js, Tailwind CSS
                            , Typescript, HTML5) and backend (Node.js, RESTful APIs) technologies,
                            skilled in designing and deploying scalable, high-performance applications.
                            Knowledge in cloud-based solutions (AWS), and CI/CD pipelines. Passionate
                            about creating efficient digital solutions with a focus on system architecture, microservices,
                            and API security (OAuth2, JWT). Adaptable and committed to delivering
                            exceptional user experiences and meeting both customer and business needs.                        </p>
                        </div>
                      </AnimatedSection>
                      <AnimatedSection animation="slideRight" delay={1200} className="sm:col-span-2 lg:col-span-1">
                        <div className="mt-8 sm:mt-12 ">
                          <Button className="w-40 flex items-center bg-black rounded-lg text-white  hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                            Download Resume
                            <IoDocumentTextOutline/>
                          </Button>
                        </div>
                      </AnimatedSection>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
