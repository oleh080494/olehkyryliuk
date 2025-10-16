import React, { useEffect, useState } from 'react';
import About from "./subsections/about.jsx";
import Resume from "./subsections/resume.jsx";
import Portfolio from "./subsections/portfolio.jsx";
import Skills from "./subsections/skills.jsx";
import Contact from "./subsections/contact.jsx";


const endpoint = "olehkyryliuk.c9g2as68ewx6.eu-north-1.rds.amazonaws.com"
const port = "5432"

function App() {
    const [backendData, setBackendData] = useState({});
    const [active, setActive] = useState("about");

    function renderSection() {
        switch (active) {
            case "about": return <About />;
            case "resume": return <Resume />;
            case "portfolio": return <Portfolio />;
            case "skills": return <Skills />;
            case "contact": return <Contact />;
            default: return <About />;
        }
    }

    const sectionHeaders = {
        about: "About",
        resume: "Resume",
        portfolio: "Portfolio",
        skills: "Skills",
        contact: "Contact"
    };

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => setBackendData(data));
    }, []);

    return (
        <div className="min-h-screen bg-[#101010] flex flex-col md:flex-row p-4 md:p-9">
            {/* Sidebar */}
            <div className="flex flex-col w-full md:w-[20vw] h-auto md:h-[94vh] mb-6 items-center justify-start md:justify-center bg-[#212121] rounded-3xl p-4 md:p-0">
                {/* Profile */}
                <div className="mt-6 md:m-6 md:w-auto flex justify-center bg-[#393939] rounded-3xl shadow-xl p-4">
                    <img
                        className="object-contain w-32 h-32 md:w-auto md:h-auto rounded-full"
                        src="/oleh_photo.png"
                        alt="oleh photo"
                    />
                </div>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans text-center mt-2">Oleh Kyryliuk</div>
                <div className="flex justify-center mt-2 md:mt-6">
                    <div className="bg-[#393939] rounded-3xl px-4 py-2 shadow-xl">
                        <h3 className="text-white text-sm sm:text-base md:text-lg">Web and Physical <br/>Product Developer</h3>
                    </div>
                </div>

                <div className="mt-4 md:mt-8 w-4/5 bg-[#393939] h-1 rounded-2xl"></div>

                {/* Contact info */}
                <div className="flex flex-col space-y-4 mt-4 md:mt-5 w-full">
                    {[
                        { icon: "/email.png", label: "EMAIL", value: "kyryliyk@gmail.com" },
                        { icon: "/mobile.png", label: "PHONE", value: "+45 42 31 75 62" },
                        { icon: "/calender.png", label: "BIRTHDAY", value: "April 8, 1994" }
                    ].map((info, idx) => (
                        <div key={idx} className="flex items-center px-2 md:px-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                                <img className="h-6 w-6 object-contain" src={info.icon} alt={info.label} />
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-[#6c6c6b] text-xs sm:text-sm">{info.label}</div>
                                <div className="text-white text-sm sm:text-base">{info.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social icons */}
                <div className="flex flex-row flex-wrap space-x-2 justify-center mt-4 md:mt-auto mb-4">
                    {[
                        { link: "https://www.facebook.com/share/17FZWXjmhM/?mibextid=wwXIfr", icon: "/facebook.png", title: "Facebook" },
                        { link: "https://www.linkedin.com/in/oleh-kyryliuk/", icon: "/linkedin.png", title: "LinkedIn" },
                        { link: "https://www.instagram.com/kyryliuk.oleh/?igsh=MTlzNG11M2YxczA%3D&utm_source=qr#", icon: "/instagram.png", title: "Instagram" }
                    ].map((social, idx) => (
                        <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" title={`Visit my ${social.title}`}>
                            <img className="h-6 w-6 cursor-pointer" src={social.icon} alt={social.title} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 h-auto mb-3 md:ml-6 bg-[#212121] rounded-3xl p-4 md:p-0">
                {/* Navigation bar + Header */}
                <div className="flex flex-col md:flex-row w-full h-auto bg-[#212121] rounded-3xl">
                    {/* Section header */}
                    <div
                        key={active}
                        className="order-2 md:order-1 md:ml-7  text-white w-full md:w-2/5 mt-3 md:mt-4 text-2xl sm:text-3xl md:text-5xl text-start md:text-left animate-fadeIn"
                    >
                        {sectionHeaders[active]}
                    </div>

                    {/* Navigation bar */}
                    <div className="order-1 md:order-2 flex flex-row flex-nowrap justify-around items-center w-full bg-[#2d2d2d] rounded-tr-3xl rounded-bl-3xl py-3 px-2 md:px-0">
                        {["about", "resume", "portfolio", "skills", "contact"].map((sec, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActive(sec)}
                                className={`cursor-pointer px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg ${
                                    active === sec ? "text-[#E1AC62] bg-[#212121] rounded-md animate-fadeIn" : "text-white hover:bg-[#393939] hover:rounded-2xl " 
                                }`}
                            >
                                {sec === "skills" ? "Skills" : sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#E1AC62] h-1.5 w-[20%] md:w-[4vw] rounded-2xl mt-4 md:mt-4 ml-0 md:ml-7"></div>

                {/* Subsection content */}
                <div id="subsections" className="m-0 md:m-7">
                    <div key={active} className="animate-fadeIn">
                        {renderSection()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
