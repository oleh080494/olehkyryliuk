import React, {act, useState} from 'react'

function Portfolio() {
    const [activeTab, setActiveTab] = useState("Hardware");

    const projects = [
        {id:1, category: "Hardware", img: "/visual_diet_tracker.png", link: "https://drive.google.com/file/d/1pYqdof5k6dPHiXI2xgudb8Sxv0AiDU0j/view?usp=drive_link"},
        {id:2, category: "Hardware", img: "/dragon_slayer.png", link: "https://drive.google.com/file/d/1WGpYwqvyskQs4KaZ7KDyhMlBvulqCyEB/view?usp=drive_link"},
        {id:3, category: "Hardware", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
        {id:4, category: "Hardware", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
        {id:5, category: "Hardware", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
        {id:6, category: "Hardware", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
    ]
    return (
        <>
            <div className="flex flex-row gap-8">
                <div
                    id="all"
                    onClick={()=>setActiveTab("All")}
                    className={`animate-fadeIn ${activeTab === "All" ? "text-[#E1AC62]" : "text-white"} cursor-pointer`}
                >
                    All
                </div>

                <div
                    id="hardware"
                    onClick={()=>setActiveTab("Hardware")}
                    className={`animate-fadeIn ${activeTab === "Hardware" ? "text-[#E1AC62]" : "text-white"} cursor-pointer`}
                >
                    Hardware
                </div>
                <div
                    id="hardware"
                    onClick={()=>setActiveTab("Software")}
                    className={`animate-fadeIn ${activeTab === "Software" ? "text-[#E1AC62]" : "text-white"} cursor-pointer`}
                >
                    Software
                </div>
            </div>

            {activeTab === "All" && (
                <div className="flex flex-wrap justify-around m-7">
                    <a
                        href="https://drive.google.com/file/d/1pYqdof5k6dPHiXI2xgudb8Sxv0AiDU0j/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/visual_diet_tracker.png"
                            alt="visual_diet_tracker"
                        />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1WGpYwqvyskQs4KaZ7KDyhMlBvulqCyEB/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/dragon_slayer.png"
                            alt="dragon_slayer"
                        />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/interactive_lamp.png"
                            alt="interactive_lamp"
                        />
                    </a>
                </div>
            )}

            {activeTab === "Hardware" && (
                <div className="flex flex-wrap justify-around m-7">
                    <a
                        href="https://drive.google.com/file/d/1pYqdof5k6dPHiXI2xgudb8Sxv0AiDU0j/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/visual_diet_tracker.png"
                            alt="visual_diet_tracker"
                        />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1WGpYwqvyskQs4KaZ7KDyhMlBvulqCyEB/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/dragon_slayer.png"
                            alt="dragon_slayer"
                        />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Click to see the project"
                        className="basis-3/5 sm:basis-1/3 md:basis-1/4 aspect-square"
                    >
                        <img
                            className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110"
                            src="/interactive_lamp.png"
                            alt="interactive_lamp"
                        />
                    </a>
                </div>
            )}



        </>


    )
}

export default Portfolio
