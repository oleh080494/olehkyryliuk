import React, { useEffect, useState } from 'react';
import About from "./subsections/about.jsx";
import Resume from "./subsections/resume.jsx";
import Portfolio from "./subsections/portfolio.jsx";
import Projects from "./subsections/projects.jsx";
import Contact from "./subsections/contact.jsx";



function App() {
    const [number, setNumber] = useState(0);
    const [backendData, setBackendData] = useState({});
    const [active, setActive] = useState("about");
    const [subsectionHeader, setSubsectionHeader] = useState("About");

    function increment() {
        setNumber((prev) => prev + 1);
    }

    function renderSection() {
        switch (active) {
            case "about":
                return <About />;
            case "resume":
                return <Resume />;
            case "portfolio":
                return <Portfolio />;
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            default:
                return <About />;
        }
    }

    const sectionHeaders = {
        about: "About",
        resume: "Resume",
        portfolio: "Portfolio",
        projects: "Projects",
        contact: "Contact"
    };


    useEffect(() => {
        //for development fetch("/api")
        //for production
        //const apiUrl = import.meta.env.VITE_API_URL || "";
        //fetch(`${apiUrl}/api`).then(
        fetch("/api").then(
            res => res.json()
        ).then(data => {
            console.log(data);
            setBackendData(data);
        })
    }, []);

    return (
        <>
            <div className="h-screen-auto bg-[#101010] flex flex-row">
                <div className="flex flex-col w-[20vw] h-[94vh]   mt-[3vh] mb-[3vh] items-center justify-center bg-[#212121] rounded-3xl">
                    <div className="ml-14 mb-7 mr-14 mt-14 flex-wrap  bg-[#393939] rounded-3xl shadow-xl">
                        <img className="m-0 p-6 object-contain" src="/oleh_photo.png" alt="oleh photo" />
                    </div>
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans text-center">Oleh Kyryliuk</div>
                    <div className="flex justify-center">
                        <div className=" bg-[#393939] mt-6 rounded-3xl inline-block px-4 py-2 shadow-xl">
                            <h3 className="text-[#FFFFFF]">Web Developer</h3>
                        </div>
                    </div>

                    <div className="mt-8 mr-4 ml-4 bg-[#393939] h-1 w-4/5 rounded-2xl"></div>

                    <div className="flex flex-col space-y-4 ml-4 mt-5">

                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="/email.png" alt="email" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">EMAIL</div>
                                <div className="text-[#FFFFFF] text-base">kyryliyk@gmail.com</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="/mobile.png" alt="phone" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">PHONE</div>
                                <div className="text-[#FFFFFF] text-base">+45 42 31 75 62</div>
                            </div>
                        </div>


                        <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src="/calender.png" alt="birthday" />
                            </div>
                            <div className="flex flex-col ml-4">
                                <div className="text-[#6c6c6b] text-sm">BIRTHDAY</div>
                                <div className="text-[#FFFFFF] text-base">April 8, 1994</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap space-x-2 justify-center mt-auto mb-4">
                        <a
                            href="https://www.facebook.com/share/17FZWXjmhM/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit my Facebook"
                        >
                            <img className="h-6 w-6 cursor-pointer" src="/facebook.png" alt="facebook" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/oleh-kyryliuk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit my LinkedIn"
                        >
                            <img className="h-6 w-6 cursor-pointer" src="/linkedin.png" alt="linkedin" />
                        </a>
                        <a
                            href="https://www.instagram.com/kyryliuk.oleh/?igsh=MTlzNG11M2YxczA%3D&utm_source=qr#"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit my Instagram"
                        >
                            <img className="h-6 w-6 cursor-pointer" src="/instagram.png" alt="instagram" />
                        </a>
                    </div>

                </div>
                <div className="flex-1 h-auto mt-[3vh] mb-[3vh] ml-[2vw] bg-[#212121] rounded-3xl">
                    <div className="flex flex-row h-[10vh] bg-[#212121] rounded-3xl">

                        <div key={active} className="text-[#FFFFFF] w-2/5 mt-7 ml-7 text-5xl animate-fadeIn">{sectionHeaders[active]}</div>

                        <div className="flex flex-row flex-wrap w-3/5 bg-[#2d2d2d] rounded-bl-4xl rounded-tr-4xl place-content-around items-center shadow-xl">
                            <div
                                id="about"
                                onClick={() => setActive("about")}
                                className={`animate-fadeIn-section cursor-pointer ${
                                    active === "about" ? "text-[#E1AC62]" : "text-white"
                                }`}
                            >
                                About
                            </div>
                            <div
                                id="resume"
                                onClick={() => setActive("resume")}
                                className={`cursor-pointer ${
                                    active === "resume" ? "text-[#E1AC62]" : "text-white"
                                }`}
                            >
                                Resume
                            </div>
                            <div
                                id="portfolio"
                                onClick={() => setActive("portfolio")}
                                className={`cursor-pointer ${
                                    active === "portfolio" ? "text-[#E1AC62]" : "text-white"
                                }`}
                            >
                                Portfolio
                            </div>
                            <div
                                id="projects"
                                onClick={() => setActive("projects")}
                                className={`cursor-pointer ${
                                    active === "projects" ? "text-[#E1AC62]" : "text-white"
                                }`}
                            >
                                Skills
                            </div>
                            <div
                                id="contact"
                                onClick={() => setActive("contact")}
                                className={`cursor-pointer ${
                                    active === "contact" ? "text-[#E1AC62]" : "text-white"
                                }`}
                            >
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#E1AC62] h-1.5 w-[4vw] rounded-2xl ml-7 mt-4"></div>
                    <div id="subsections" className="m-7">
                        <div key={active} className="animate-fadeIn">
                            {renderSection()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
