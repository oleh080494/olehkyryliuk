// skills.jsx
import React from "react";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { FaArrowRotateLeft} from "react-icons/fa6";



function Skills() {
    const technicalSkills = [
        "Java, JavaScript, Python, C, C++",
        "Web technologies (HTML, CSS, React, Firebase, REST APIs)",
        "Distributed systems, algorithms, and data structures",
        "Client-server architecture, peer-to-peer networks",
        "Database design and management (mySQL, NoSQL, Firebase)",
        "Software security (RSA, AES, cryptography basics)",
        "User-centered design methods & usability testing",
        "Arduino, sensors, actuators, and physical computing",
        "3D modeling & rapid prototyping",
        "Agile/Scrum project management & iterative prototyping",
        "Git/GitHub version control",
        "Figma, Adobe, interface design",
        "Docker containerization and deployment on a Hetzner VPS",
        "Spotify API integration & external APIs"
    ];

    const softSkills = [
        "Collaboration in diverse teams",
        "Effective group project management",
        "Clear communication of technical concepts",
        "Creative problem solving & innovation",
        "Identifying user needs and building solutions",
        "Critical and reflective thinking",
        "Awareness of ethical and social implications of tech",
        "Adaptability & fast learner",
        "Independent and collaborative working"
    ];

    const renderList = (items) =>
        items.map((skill, index) => (
            <li
                key={index}
                className="flex items-center bg-[#2d2d2d] text-white px-4 py-3 rounded-xl shadow-lg hover:bg-[#393939] transition transform hover:scale-105"
            >
                <span className="text-[#E1AC62] mr-3">•</span>
                {skill}
            </li>
        ));

    return (
        <div className="text-white">
            {/* Technical Skills Section */}
            <div className="mb-10 mt-10">
                <div className="flex items-center mb-4">
                    <FaLaptopCode className="text-[#E1AC62] mr-3 text-2xl" />
                    <h2 className="text-3xl font-bold">Technical Skills</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderList(technicalSkills)}
                </ul>
            </div>

            {/* Soft Skills Section */}
            <div>
                <div className="flex items-center mb-4">
                    <FaLightbulb className="text-[#E1AC62] mr-3 text-2xl" />
                    <h2 className="text-3xl font-bold">Soft Skills</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderList(softSkills)}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
