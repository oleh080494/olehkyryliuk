import React from "react";

function Resume() {
    const educationData = [
        {
            title: "Aarhus University",
            date: "2022 – 2025",
            description: "IT Product Development (Bachelor's degree)",
        },
        {
            title: "Campus Vejle",
            date: "June 2022 – August 2022",
            description: "Mathematics A",
        },
        {
            title: "Campus Vejle",
            date: "December 2021 – April 2022",
            description: "English B",
        },
        {
            title: "Sprogcenter Vejle",
            date: "June 2019 – December 2019",
            description: "Danish Language (Studieprøve)",
        },
        {
            title: "Campus Vejle",
            date: "December 2018 – October 2019",
            description: "Danish Language (FVU)",
        },
        {
            title: "Sprogcenter Vejle",
            date: "November 2017 – November 2017",
            description: "Danish Language (DU3)",
        },
        {
            title: "Lutsk National Technical University",
            date: "September 2014 – January 2016",
            description:
                "Commodity Science and Customs Examination (Master's degree)",
        },
        {
            title: "Kyiv International University",
            date: "September 2012 – June 2014",
            description:
                "Merchandising and Commercial Business (Bachelor's degree)",
        },
        {
            title: "Technologies, Business and Law College",
            date: "September 2009 – May 2012",
            description:
                "Merchandising and Commercial Business (Junior Specialist's degree)",
        },
    ];

    return (
        <div className="ml-6 mt-6">
            {/* Header */}
            <div className="flex flex-row items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#24252e]">
                    <img
                        className="h-6 w-6"
                        src="../public/education.png"
                        alt="education"
                    />
                </div>
                <div className="ml-5 text-[#FFFFFF] text-4xl">Education</div>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-[#E1AC62] ml-6 mt-10">
                {educationData.map((item, index) => (
                    <div key={index} className="mb-10 ml-6 relative">
                        {/* Dot aligned with timeline */}
                        <div className="absolute left-[-1.9rem] top-2 w-3 h-3 bg-[#E1AC62] rounded-full"></div>

                        <h3 className="text-white font-bold">{item.title}</h3>
                        <span className="text-gray-400 text-sm">{item.date}</span>
                        <p className="text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resume;
