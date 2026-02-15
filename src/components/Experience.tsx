
import React from "react";


export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
  type?: string;
  duration?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "ThinkDeck",
    role: "Full Stack Developer",
    period: "Internship",
    description:
      " Built full-stack AI assessment modules using Next.js, React.js, Node.js, and integrated REST APIs.  • Implemented WebSocket-based real-time communication for live candidate–AI interaction and responsehandling.  • Designed AI workflows with fallback logic, question generation, and automated scoring for reliable evaluations  ",
    logo: "/assets/zq.jpg", // Place your logo in public/icons/ud.png
    type: "Internship",
    duration: "6 Months", 
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-[#0C0C0D] w-full">
      {/* Shared container for BOTH heading + content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-20">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-KGBlankSpaceSketch text-white mb-20">
          EXPERIENCE
        </h1>

        {/* Cards */}
        <div className="flex flex-col gap-14 items-start">
          {experiences.map((exp, idx) => (
            <div key={idx} className="w-full text-gray-400">
              <div
                className={`relative flex flex-col xl:flex-row gap-4 text-white ${
                  idx % 2 !== 0 ? "xl:flex-row-reverse" : "xl:flex-row"
                }`}
              >
                {/* Left: Logo */}
                <div className="xl:w-1/3 flex items-center justify-center">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className={`w-32 h-32 object-contain rounded-t-3xl xl:rounded-t-[0] bg-white p-2 ${
                        idx % 2 !== 0
                          ? "xl:rounded-tr-3xl xl:rounded-br-3xl"
                          : "xl:rounded-tl-3xl xl:rounded-bl-3xl"
                      }`}
                    />
                  )}
                </div>

                {/* Right: Details */}
                <div
                  className={`xl:w-2/3 relative flex flex-col justify-between bg-[#181819] p-6 space-y-4 rounded-b-3xl xl:rounded-b-[0] border border-[#232323] ${
                    idx % 2 !== 0
                      ? "xl:rounded-tl-3xl xl:rounded-bl-3xl"
                      : "xl:rounded-tr-3xl xl:rounded-br-3xl"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <span className="text-xl font-bold text-gray-200">
                        {exp.company}
                      </span>

                      {exp.type && (
                        <span className="text-green-500 text-xs font-medium border border-gray-600 rounded-3xl px-2 py-1 bg-opacity-10 bg-white ml-2">
                          {exp.type}
                        </span>
                      )}

                      {exp.duration && (
                        <span className="text-blue-500 text-xs font-semibold border border-gray-600 rounded-3xl px-2 py-1 bg-opacity-10 bg-white ml-2">
                          Duration: {exp.duration}
                        </span>
                      )}

                      <span className="text-xs text-gray-400 ml-2">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-400 mt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
