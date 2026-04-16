import React from "react";

function About() {
  return (
    <div>
      {/* Intro paragraph */}
      <div>
        <p className="text-[#6c6c6b] font-montserrat mt-7">
          I am passionate about building intuitive and engaging digital
          experiences, with a strong focus on web development and software
          design. Throughout my studies, I have worked on developing responsive
          and user-centered web applications, combining clean design with
          efficient and maintainable code.
          <br />
          <br />
          I have hands-on experience with full-stack development, including a
          collaboration with Aarhus Kommune where my group implemented a search
          feature for an existing system. This project strengthened my ability
          to translate user and business requirements into functional, scalable
          solutions, while working in a structured and professional development
          environment.
          <br />
          <br />
          In addition to development, I have a strong interest in web design and
          user experience. I focus on creating interfaces that are both visually
          appealing and easy to use, ensuring a smooth interaction between users
          and systems. My experience with prototyping and iterative design has
          helped me understand the importance of testing and refining solutions
          to achieve high-quality results.
          <br />
          <br />I am a fast learner and naturally curious, always aiming to
          understand not only how systems work, but why they work. This mindset
          allows me to quickly adapt to new technologies, solve complex
          problems, and contribute effectively in collaborative, fast-paced
          development teams.
        </p>
      </div>

      {/* Section title */}
      <div className="text-4xl text-[#FFFFFF] mt-7 mb-7">
        <h1>What I'm Doing</h1>
      </div>

      {/* Cards wrapper */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Web Development */}
        <div className="flex flex-col md:flex-row items-center w-full justify-center h-auto md:h-[15vh] bg-[#2d2d2d] rounded-2xl shadow-xl p-4">
          <div className="h-15 w-15 flex items-center justify-center rounded-md bg-[#24252e] mb-3 md:mb-0">
            <img
              className="h-10 w-10 object-contain"
              src="/electronics.png"
              alt="web development"
            />
          </div>
          <div className="flex flex-col md:ml-4 text-center md:text-left">
            <div className="text-[#FFFFFF] text-sm">Exploring Electronics</div>
            <div className="text-[#6c6c6b] text-base">
              Building understanding
              <br /> of different components
            </div>
          </div>
        </div>

        {/* Web Design */}
        <div className="flex flex-col md:flex-row items-center w-full justify-center h-auto md:h-[15vh] bg-[#2d2d2d] rounded-2xl shadow-xl p-4">
          <div className="h-15 w-15 flex items-center justify-center rounded-md bg-[#24252e] mb-3 md:mb-0">
            <img
              className="h-10 w-10 object-contain"
              src="/web-design.png"
              alt="web design"
            />
          </div>
          <div className="flex flex-col md:ml-4 text-center md:text-left">
            <div className="text-[#FFFFFF] text-sm">Web Design</div>
            <div className="text-[#6c6c6b] text-base">
              The most modern and
              <br /> high-quality design
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="flex flex-col md:flex-row items-center w-full justify-center h-auto md:h-[15vh] bg-[#2d2d2d] rounded-2xl shadow-xl p-4">
          <div className="h-15 w-15 flex items-center justify-center rounded-md bg-[#24252e] mb-3 md:mb-0">
            <img
              className="h-10 w-10 object-contain"
              src="/web-development.png"
              alt="web development"
            />
          </div>
          <div className="flex flex-col md:ml-4 text-center md:text-left">
            <div className="text-[#FFFFFF] text-sm">Web Development</div>
            <div className="text-[#6c6c6b] text-base">
              High quality development of
              <br /> sites websites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
