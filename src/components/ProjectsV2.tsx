import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Github, Radio } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NeonGradientCard } from "./ui/neon-gradient-card";

export function ProjectsV2() {
  const data = [
    {
      title: "  Sea Guardian",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-4xl font-semibold mb-3 text-mid">
                    Sea Guardian
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://seaguardian.binit.site/"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/Pranav2317/SeaGuardian"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-6 text-ellipsis text-start">
                 •Engineered a fault-tolerant backend with Node.js, AWS S3/EC2, ensuring 99.9% uptime.<br></br>
• Led a 5-member Agile team, recognized at GDSC Regional Bootcamp for innovation.<br></br>
• Integrated AI-powered pollution detection (Sentinel-2, NASA MODIS) with 90% accuracy, reducing environmental response
time by 40%.

                </p>
              </div>
            </div>
 <div className="grid grid-cols-0 gap-3">
  <div className="w-full max-w-[700px] h-auto"> {/* Increased max width */}
    <Image
      src="/assets/sea.png"
      alt="Sea Guardian project screenshot"
      width={800} // Increased width
      height={800} // Increased height
      className="rounded-lg object-cover h-60 md:h-80 lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  </div>
</div>


          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Paws-Vedas",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700 "
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    Paws-vedas an ecommerce website
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://github.com/Pranav2317/Paws-Vedas"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://github.com/Pranav2317/Paws-Vedas"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-4 text-ellipsis text-start">
                 Built a full-stack platform for virtual vet care, personalized pet health info, and e-commerce. 
• Developed responsive UI with Angular; integrated RESTful APIs and MongoDB for seamless data flow. 
• Enabled vendor engagement through dynamic listings and intuitive product tools. 
                </p>
              </div>
            </div>
<div className="grid grid-cols-1 gap-3 place-items-center">
  <div className="w-full max-w-[600px]">
    <Image
      src="/assets/paws1.png" // Make sure this is correct
      alt="PawsVeda full page screenshot"
      width={600}
      height={300}
      className="rounded-lg w-full h-[300px] object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  </div>
</div>





          </NeonGradientCard>
        </motion.div>
      ),
    },
    {
      title: "Zen-Cloud",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="items-center justify-center text-center">
            <div className="flex justify-between w-full">
              <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold mb-2 text-start">
                    School Web App: Freelance Project
                  </h3>
                  <div className="flex space-x-2 h-full">
                    <Link
                      href={"https://github.com/Pranav2317/ZenCloud"}
                      target="_blank"
                      className="bg-black p-2 right-4  text-white rounded-full"
                    >
                      <Radio size={16} />
                    </Link>
                    <Link
                      href={"https://zencloud-git-master-pranabh-dubeys-projects.vercel.app/"}
                      target="_blank"
                      className="bg-black p-2  text-white rounded-full"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
                <p className="text-lg line-clamp-4 text-ellipsis text-start">
       Developed a responsive and modern cloud storage landing page for ZenCloud, a fictional SaaS product offering secure file storage and sharing solutions. The website showcases key features like bank-level security, file versioning, user plans, and real user testimonials.
   
                </p>
              </div>
            </div>
<div className="w-full flex justify-center py-16 px-4">
  <div className="w-full max-w-[700px]">
    <Image
      src="/assets/zencloud.png"
      alt="ZenCloud project screenshot"
      width={700}
      height={300} // reduced from 600 to avoid overflow
      className="rounded-lg w-full h-auto object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  </div>
</div>





          </NeonGradientCard>
        </motion.div>
      ),
    },
    // {
    //   title: "OurssEstate",
    //   content: (
    //     <motion.div
    //       className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
    //       initial={{ scale: 0.8, opacity: 0 }}
    //       whileInView={{ scale: 1, opacity: 1 }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       <NeonGradientCard className="items-center justify-center text-center">
    //         <div className="flex justify-between w-full">
    //           <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
    //             <div className="flex justify-between">
    //               <h3 className="text-2xl font-semibold mb-2 text-start">
    //                 OurssEstate: Real Estate Web App
    //               </h3>
    //               <div className="flex space-x-2 h-full">
    //                 <Link
    //                   href={"https://new-estate.onrender.com/"}
    //                   target="_blank"
    //                   className="bg-black p-2 right-4  text-white rounded-full"
    //                 >
    //                   <Radio size={16} />
    //                 </Link>
    //                 <Link
    //                   href={"https://github.com/Himanshu-holmes/RealEstate"}
    //                   target="_blank"
    //                   className="bg-black p-2  text-white rounded-full"
    //                 >
    //                   <Github size={16} />
    //                 </Link>
    //               </div>
    //             </div>
    //             <p className="line-clamp-4 text-ellipsis text-start text-lg">
    //               {/* Kabutar is a real-time chat application built with React,
    //               Node.js, Express, and Socket.IO, featuring Cloudinary for
    //               media handling and optimized performance using Redux Toolkit
    //               for state management. */}
    //               a responsive full-stack MERN real estate web application,
    //               implementing OAuth-based authentication (sign-in, sign-up,
    //               sign-out) and key features like search functionality, image
    //               uploads, dynamic image sliders, and user-listing management,
    //               enhancing user experience and engagement.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="grid grid-cols-2 gap-4">
    //           <Image
    //             src="/assets/projects/project2/p1.png"
    //             alt="hero template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project2/p2.png"
    //             alt="feature template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project2/p3.png"
    //             alt="bento template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project2/p4.png"
    //             alt="cards template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //         </div>
    //       </NeonGradientCard>
    //     </motion.div>
    //   ),
    // },
    // {
    //   title: "Typing Panda",
    //   content: (
    //     <motion.div
    //       className="w-full bg-[#181819] p-6 rounded-xl border-[1px] border-gray-700"
    //       initial={{ scale: 0.8, opacity: 0 }}
    //       whileInView={{ scale: 1, opacity: 1 }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       <NeonGradientCard className="items-center justify-center text-center">
    //         <div className="flex justify-between w-full">
    //           <div className="text-neutral-800 w-full dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
    //             <div className="flex justify-between">
    //               <h3 className="text-2xl font-semibold mb-2 text-start">
    //                 Typing Panda: Vanila Fullstack Typing app
    //               </h3>
    //               <div className="flex space-x-2 h-full">
    //                 <Link
    //                   href={"https://typingpanda.netlify.app"}
    //                   target="_blank"
    //                   className="bg-black p-2 right-4  text-white rounded-full"
    //                 >
    //                   <Radio size={16} />
    //                 </Link>
    //                 <Link
    //                   href={"https://github.com/sachu0dev/Typing_Panda"}
    //                   target="_blank"
    //                   className="bg-black p-2  text-white rounded-full"
    //                 >
    //                   <Github size={16} />
    //                 </Link>
    //               </div>
    //             </div>
    //             <p className="line-clamp-4 text-ellipsis text-start text-lg">
    //               Typing Panda: Interactive game to enhance typing skills with
    //               customizable features for all skill levels.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="grid grid-cols-2 gap-4">
    //           <Image
    //             src="/assets/projects/project3/p1.png"
    //             alt="hero template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p2.png"
    //             alt="feature template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p3.png"
    //             alt="bento template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //           <Image
    //             src="/assets/projects/project3/p4.png"
    //             alt="cards template"
    //             width={500}
    //             height={500}
    //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    //           />
    //         </div>
    //       </NeonGradientCard>
    //     </motion.div>
    //   ),
    // },
  ];
  return (
    <div className="w-full dark font-DegularBold">
      <Timeline data={data} />
    </div>
  );
}
