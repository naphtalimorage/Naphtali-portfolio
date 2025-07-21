import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection.tsx";


const Footer = () => {
    const links = [
        {id: 1,label: "Home",href: "/"},
        {id: 2,label: "About",href: "/about"},
        {id: 3,label: "Skills",href: "/skills"},
        {id: 4,label: "Service",href: "/services"},
        {id: 5,label: "Projects",href: "/projects"},
        {id: 6,label: "Contact",href: "/contact"},

    ]

    return(
        <footer className="border-t-1 border-gray-300 text-white py-4">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb- sm:mb-2">Naphtali</h1>
                <div className=" flex justify-center items-center mb-5 mt-5 font-semibold">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-sm text-gray-900 hover:text-gray-900 mx-2"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex justify-center items-center text-black space-x-7 mb-10 ">
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
                <p className="text-sm text-black mb-5">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;