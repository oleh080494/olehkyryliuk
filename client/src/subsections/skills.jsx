// skills.jsx
import React, {useState} from "react";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa";



function Skills() {
    const [selectedItem, setSelectedItem] = useState(null)

    const technicalSkills = [
        ["Java, JavaScript, Python, C, C++", "Used Java for writing a simple game and tests for it. JavaScript was used for web development as well as Python. C and C++ were used for programming Arduino."],
        ["Web technologies (HTML, CSS, React, Firebase, REST APIs)", "Built responsive web apps using React and Firebase, connecting frontends to backends through REST APIs."],
        ["Distributed systems, algorithms, and data structures", "Studied and implemented distributed algorithms, focusing on efficiency, scalability, and fault tolerance."],
        ["Client-server architecture, peer-to-peer networks", "Developed systems communicating through both centralized and decentralized network topologies."],
        ["Database design and management (mySQL, NoSQL, Firebase)", "Designed relational and non-relational databases, handled queries, and managed data synchronization in Firebase."],
        ["Software security (RSA, AES, cryptography basics)", "Implemented encryption, decryption, and digital signatures to secure data in Go-based projects."],
        ["User-centered design methods & usability testing", "Applied design thinking, conducted user testing, and iteratively improved interfaces based on feedback."],
        ["Arduino, sensors, actuators, and physical computing", "Created interactive prototypes combining sensors and actuators with Arduino microcontrollers."],
        ["3D modeling & rapid prototyping", "Designed and fabricated physical components using CAD tools and 3D printing for fast iteration."],
        ["Agile/Scrum project management & iterative prototyping", "Worked in sprints with regular stand-ups, retrospectives, and continuous feedback cycles."],
        ["Git/GitHub version control", "Used Git and GitHub for collaborative coding, managing branches, and handling version history."],
        ["Figma, Adobe, interface design", "Designed interactive prototypes and user interfaces using Figma and Adobe tools."],
        ["Docker containerization and deployment on a Hetzner VPS", "Deployed full-stack applications using Docker containers hosted on a Hetzner virtual private server."],
        ["Spotify API integration & external APIs", "Integrated external APIs, including Spotify API, to build dynamic and interactive web experiences."]
    ];

    const softSkills = [
        ["Collaboration in diverse teams", "Worked effectively in multicultural, interdisciplinary teams across various academic and design projects."],
        ["Effective group project management", "Coordinated tasks, tracked progress, and ensured timely delivery of project milestones."],
        ["Clear communication of technical concepts", "Explained complex ideas in accessible ways to both technical and non-technical audiences."],
        ["Creative problem solving & innovation", "Approached challenges with out-of-the-box thinking and prototyped original solutions."],
        ["Identifying user needs and building solutions", "Researched user behavior and designed products that address real needs and improve user experience."],
        ["Critical and reflective thinking", "Evaluated design and technical decisions with a focus on impact, trade-offs, and long-term value."],
        ["Awareness of ethical and social implications of tech", "Considered how technology affects privacy, fairness, and sustainability in design processes."],
        ["Adaptability & fast learner", "Quickly learned new tools, programming languages, and frameworks as projects required."],
        ["Independent and collaborative working", "Balanced solo work and team collaboration efficiently to achieve high-quality project outcomes."]
    ];


    const renderList = (items) =>
        items.map(([title, description], index) => (
            <li
                key={index}
                className="flex items-center bg-[#2d2d2d] text-white px-4 py-3 rounded-xl shadow-lg hover:bg-[#393939] transition transform hover:scale-105 cursor-pointer"
                onClick={()=> setSelectedItem({title, description})}
            >

                {title}
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

            {/*Modal box/Explanation*/}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-[#2d2d2d] p-6 rounded-2xl shadow-2xl max-w-md w-full text-center ml-5 mr-5">
                        <h3 className="text-2xl font-bold text-[#E1AC62] mb-3">
                            {selectedItem.title}
                        </h3>
                        <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="bg-[#E1AC62] text-black px-5 py-2 rounded-xl font-semibold hover:bg-[#c5924c] transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Skills;
