import React, { useState } from 'react';

function Portfolio() {
    const [activeTab, setActiveTab] = useState("All");

    const projects = [
        {id:1, category: "Hardware", alt: "visual diet tracker", img: "/visual_diet_tracker.png", link: "https://drive.google.com/file/d/1pYqdof5k6dPHiXI2xgudb8Sxv0AiDU0j/view?usp=drive_link"},
        {id:2, category: "Hardware", alt: "dragon slayer", img: "/dragon_slayer.png", link: "https://drive.google.com/file/d/1WGpYwqvyskQs4KaZ7KDyhMlBvulqCyEB/view?usp=drive_link"},
        {id:3, category: "Hardware", alt: "interactive lamp", img: "/interactive_lamp.png", link: "https://drive.google.com/file/d/1cwS4NTWL1y6UdeUrmgpy0Q85i6eL37wU/view?usp=drive_link"},
        {id:4, category: "Software", alt: "aarhus kommune", img: "/aarhus_kommune.png", link: "https://drive.google.com/file/d/1pt7lDjj0Ujz1Ey8RvTM8dxw1dq-VnZ_x/view?usp=drive_link"},
        {id:5, category: "Software", alt: "website portfolio", img: "/website_portfolio.png", link: "https://olehkyryliuk.com/"},
    ];

    const filteredProjects = activeTab === "All" ? projects : projects.filter(p => p.category === activeTab);

    return (
        <div className="p-4">
            {/* Tabs */}
            <div className="flex flex-row gap-4 justify-start mb-6 flex-wrap">
                {["All", "Hardware", "Software"].map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer px-3 py-1 rounded-md transition-colors duration-200 ${
                            activeTab === tab ? "text-[#E1AC62] bg-[#2d2d2d]" : "text-white hover:text-[#E1AC62]"
                        }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center animate-fadeIn">
                {filteredProjects.map(p => (
                    <a
                        key={p.id}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center"
                        title={p.alt}
                    >
                        {/* Scale images: smaller on desktop, slightly smaller on mobile */}
                        <div className="w-4/5 sm:w-full md:w-3/4 md:aspect-square">
                            <img
                                className="w-full h-full object-cover rounded-3xl transition duration-300 ease-in-out hover:brightness-50 hover:scale-110 border-1 border-[#E1AC62]"
                                src={p.img}
                                alt={p.alt}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
