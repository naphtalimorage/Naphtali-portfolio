// import BackButton from "@/components/BackButton.tsx";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import {Button} from "@/components/ui/button.tsx";
import { LiaTelegram } from "react-icons/lia";
import AnimatedSection from "@/components/AnimatedSection.tsx";


const Hero = () => {
    return(
        <section id="home" className="relative min-h-screen px-48 py-24 bg-gray-50">
            <div className="flex flex-row  space-x-20 ">
                <div className="flex flex-col space-y-7 py-10">
                    <AnimatedSection animation="fadeIn" delay={200}>
                        <a href="mailto:your-email@example.com" className="">
                            <FaSquareXTwitter size={30}/>
                        </a>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={400}>
                        <a href="https://linkedin.com/in/yourprofile" className="">
                            <FaLinkedin size={30}/>
                        </a>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={600}>
                        <a href="https://github.com/yourusername" className="">
                            <FaInstagram size={30}/>
                        </a>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={800}>
                        <a href="https://github.com/yourusername" className="">
                            <FaWhatsapp size={30}/>
                        </a>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={1000}>
                        <a href="https://github.com/yourusername" className="">
                            <FaGithub size={30}/>
                        </a>
                    </AnimatedSection>
                </div>
                <div className="flex flex-col">
                    <AnimatedSection animation="fadeIn" delay={200}>
                        <div className=" space-y-4">
                            <h1 className="text-5xl font-bold ">Naphtali Morage <br/> Wanjiru</h1>
                            <div className="flex flex-row space-x-4 items-center">
                                <hr className="w-24"></hr>
                                <p className="text-lg">Web Developer</p>
                            </div>
                            <p className="text-gray-600 text-lg">
                                I am a passionate web developer based in Nairobi,Kenya <br/>
                                with expertise in modern web technologies.
                                This <br/>portfolio showcases my projects and skills.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={400}>
                        <div className="pt-20 flex flex-col space-y-4">
                            <Button className="bg-gray-900 text-white hover:bg-black transition-colors duration-300 px-6 py-6 rounded-lg w-40">
                                Say Hello
                                <LiaTelegram  className="ml-1"/>
                            </Button>
                            <div className="flex flex-row items-center space-x-4">
                                <div className="mouse-scroll"></div>
                                <p>Scroll Down</p>
                                <FaArrowDown size={20}/>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
export default Hero;




// <div className="min-h-screen flex flex-col items-center justify-center p-4">
//     <BackButton />
//     <div className="max-w-4xl w-full">
//         <h1 className="text-4xl font-bold mb-6">Naphtali's Portfolio</h1>
//
//         <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">About Me</h2>
//             <p className="mb-4">
//                 Hello! I'm a passionate developer with expertise in modern web technologies.
//                 This portfolio showcases my projects and skills.
//             </p>
//             <p>
//                 Feel free to explore my work and get in touch if you'd like to collaborate!
//             </p>
//         </section>
//
//         <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 <div className="p-3 border rounded">React</div>
//                 <div className="p-3 border rounded">TypeScript</div>
//                 <div className="p-3 border rounded">JavaScript</div>
//                 <div className="p-3 border rounded">HTML/CSS</div>
//                 <div className="p-3 border rounded">Tailwind CSS</div>
//                 <div className="p-3 border rounded">Node.js</div>
//             </div>
//         </section>
//
//         <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
//             <div className="space-y-6">
//                 <div className="p-4 border rounded">
//                     <h3 className="text-xl font-medium mb-2">Project 1</h3>
//                     <p className="mb-2">Description of your first project goes here.</p>
//                     <div className="flex space-x-2">
//                         <button className="px-3 py-1 bg-blue-500 text-white rounded">View Demo</button>
//                         <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded">GitHub</button>
//                     </div>
//                 </div>
//
//                 <div className="p-4 border rounded">
//                     <h3 className="text-xl font-medium mb-2">Project 2</h3>
//                     <p className="mb-2">Description of your second project goes here.</p>
//                     <div className="flex space-x-2">
//                         <button className="px-3 py-1 bg-blue-500 text-white rounded">View Demo</button>
//                         <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded">GitHub</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//
//         <section>
//             <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
//             <p className="mb-4">
//                 I'm always open to new opportunities and collaborations.
//             </p>
//             <div className="flex space-x-4">
//                 <a href="mailto:your-email@example.com" className="px-4 py-2 bg-blue-500 text-white rounded">Email Me</a>
//                 <a href="https://linkedin.com/in/yourprofile" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">LinkedIn</a>
//                 <a href="https://github.com/yourusername" className="px-4 py-2 border border-blue-500 text-blue-500 rounded">GitHub</a>
//             </div>
//         </section>
//     </div>
// </div>