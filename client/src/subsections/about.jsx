import React from 'react'

function About() {
    return (
        <div>
            {/* Intro paragraph */}
            <div>
                <p className="text-[#6c6c6b] font-montserrat mt-7">
                    I have a strong interest in building systems that connect hardware and software, and throughout my studies I have worked on projects involving sensors, actuators, and responsive objects such as interactive lamps and toys. These projects gave me valuable experience in system integration, electronics, and creating reliable solutions that combine physical components with software control.<br/><br/>
                    I have also worked on full-stack projects, including a collaboration with Aarhus Kommune where my group developed a search function for their existing system. This taught me how professional projects are organized and strengthened my ability to translate requirements into working solutions.<br/><br/>
                    In addition, I gained practical experience with Fusion 360 and 3D printing, where I designed and produced physical prototypes. This hands-on work helped me understand the importance of testing, iteration, and precision in engineering.<br/><br/>
                    I am a fast learner and naturally curious, always eager to understand not only if something works, but why it works. This mindset has helped me quickly adapt to new technologies and solve complex problems, while always meeting deadlines in fast-paced, collaborative project environments.
                </p>
            </div>

            {/* Section title */}
            <div className="text-4xl text-[#FFFFFF] mt-7 mb-7">
                <h1>What I'm Doing</h1>
            </div>

            {/* Cards wrapper */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Web Design */}
                <div className="flex flex-col md:flex-row items-center w-full justify-center h-auto md:h-[15vh] bg-[#2d2d2d] rounded-2xl shadow-xl p-4">
                    <div className="h-15 w-15 flex items-center justify-center rounded-md bg-[#24252e] mb-3 md:mb-0">
                        <img className="h-10 w-10 object-contain" src="/web-design.png" alt="web design" />
                    </div>
                    <div className="flex flex-col md:ml-4 text-center md:text-left">
                        <div className="text-[#FFFFFF] text-sm">Web Design</div>
                        <div className="text-[#6c6c6b] text-base">
                            The most modern and<br/> high-quality design
                        </div>
                    </div>
                </div>

                {/* Web Development */}
                <div className="flex flex-col md:flex-row items-center w-full justify-center h-auto md:h-[15vh] bg-[#2d2d2d] rounded-2xl shadow-xl p-4">
                    <div className="h-15 w-15 flex items-center justify-center rounded-md bg-[#24252e] mb-3 md:mb-0">
                        <img className="h-10 w-10 object-contain" src="/web-development.png" alt="web development" />
                    </div>
                    <div className="flex flex-col md:ml-4 text-center md:text-left">
                        <div className="text-[#FFFFFF] text-sm">Web Development</div>
                        <div className="text-[#6c6c6b] text-base">
                            High quality development of<br/> sites websites
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
