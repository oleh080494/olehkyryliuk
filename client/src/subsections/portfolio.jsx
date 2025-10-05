import React, {act, useState} from 'react'

function Portfolio() {
    const [activeTab, setActiveTab] = useState("Hardware");

    const projects = [
        {id:1, category: "Hardware", alt: "visual diet tracker", img: "/visual_diet_tracker.png", link: "https://drive.google.com/file/d/1pYqdof5k6dPHiXI2xgudb8Sxv0AiDU0j/view?usp=drive_link"},
        {id:2, category: "Hardware", alt: "dragon slayer", img: "/dragon_slayer.png", link: "https://drive.google.com/file/d/1WGpYwqvyskQs4KaZ7KDyhMlBvulqCyEB/view?usp=drive_link"},
        {id:3, category: "Hardware", alt: "interactive lamp", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
        {id:4, category: "Software", alt: "aarhus kommune", img: "/aarhus_kommune.png", link: "https://drive.google.com/file/d/1pt7lDjj0Ujz1Ey8RvTM8dxw1dq-VnZ_x/view?usp=drive_link"},
        {id:5, category: "Software", alt: "website portfolio", img: "/website_portfolio.png", link: "https://olehkyryliuk.com/"},

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
                    id="software"
                    onClick={()=>setActiveTab("Software")}
                    className={`animate-fadeIn ${activeTab === "Software" ? "text-[#E1AC62]" : "text-white"} cursor-pointer`}
                >
                    Software
                </div>
            </div>

            {activeTab === "All" && (
                <div className="flex flex-wrap m-7">
                    {projects.map(p => (
                        <a
                            key={p.id}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="basis-1/3 p-4"
                            title={p.alt}
                        >
                            <img
                                className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110 border-1 border-[#E1AC62] animate-fadeIn"
                                src={p.img}
                                alt={p.alt}
                            />
                        </a>
                    ))}
                </div>
            )}

            {activeTab === "Hardware" && (
                <div className="flex flex-wrap justify-start m-7">
                    {projects.filter(p => p.category === activeTab)
                        .map((p) => (
                            <a
                                key={p.id}
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="basis-1/3 p-4"
                            >
                                <img
                                    className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110 border-1 border-[#E1AC62] animate-fadeIn"
                                    src={p.img}
                                    alt={p.alt}
                                />
                            </a>
                        ))}
                </div>
            )}

            {activeTab === "Software" && (
                <div className="flex flex-wrap justify-start m-7">
                    {projects.filter(p => p.category === activeTab)
                        .map((p) => (
                            <a
                                key={p.id}
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-none w-1/3 p-4"
                            >
                                <img
                                    className="w-full h-full rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110 border-1 border-[#E1AC62] animate-fadeIn"
                                    src={p.img}
                                    alt={p.alt}
                                />
                            </a>
                        ))}
                </div>
            )}



        </>


    )
}

export default Portfolio
