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
  title: "Sea Guardian",
  content: (
    <motion.div
      className="w-full bg-[#181819] p-4 sm:p-6 rounded-xl border border-gray-700"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <NeonGradientCard className="flex flex-col gap-6 items-center justify-center text-center">
        <div className="w-full text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-start text-mid">
              Sea Guardian
            </h3>
            <div className="flex space-x-2">
              <Link
                href="https://seaguardian.binit.site/"
                target="_blank"
                className="bg-black p-2 text-white rounded-full"
              >
                <Radio size={16} />
              </Link>
              <Link
                href="https://github.com/Pranav2317/SeaGuardian"
                target="_blank"
                className="bg-black p-2 text-white rounded-full"
              >
                <Github size={16} />
              </Link>
            </div>
          </div>
       <p className="text-start text-sm sm:text-base leading-relaxed line-clamp-4 mb-4">
  • Built a fault-tolerant backend with AWS & Node.js (99.9% uptime).<br />
  • Led AI-based pollution detection (Sentinel-2, 90% accuracy).<br />
  • Recognized at GDSC Bootcamp for innovative impact.
</p>
        </div>
        <div className="w-full max-w-full">
     <Image
  src="/assets/sea.png"
  alt="Sea Guardian project screenshot"
  width={800}
  height={800}
  className="rounded-lg w-full max-h-[360px] sm:max-h-[240px] object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
/>



        </div>
      </NeonGradientCard>
    </motion.div>
  ),
},

    {
      title: "Paws-Vedas",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-4 sm:p-6 rounded-xl border border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="flex flex-col gap-6 items-center justify-center text-center">
            <div className="w-full text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-start">
                  Paws-Vedas: E-commerce Website
                </h3>
                <div className="flex space-x-2">
                  <Link
                    href="https://github.com/Pranav2317/Paws-Vedas"
                    target="_blank"
                    className="bg-black p-2 text-white rounded-full"
                  >
                    <Radio size={16} />
                  </Link>
                  <Link
                    href="https://github.com/Pranav2317/Paws-Vedas"
                    target="_blank"
                    className="bg-black p-2 text-white rounded-full"
                  >
                    <Github size={16} />
                  </Link>
                </div>
              </div>
              <p className="text-start leading-relaxed text-sm sm:text-base">
                • Built a full-stack platform for virtual vet care, personalized pet health info, and e-commerce. <br />
                • Developed responsive UI with Angular; integrated RESTful APIs and MongoDB for seamless data flow. <br />
                • Enabled vendor engagement through dynamic listings and intuitive product tools.
              </p>
            </div>
            <div className="w-full max-w-full">
              <Image
                src="/assets/paws1.png"
                alt="PawsVedas Screenshot"
                width={600}
                height={300}
                className="rounded-lg w-full max-h-[300px] object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },

    {
      title: "Zen-Cloud",
      content: (
        <motion.div
          className="w-full bg-[#181819] p-4 sm:p-6 rounded-xl border border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <NeonGradientCard className="flex flex-col gap-6 items-center justify-center text-center">
            <div className="w-full text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-start">
                  Zen-Cloud: School Web App
                </h3>
                <div className="flex space-x-2">
                  <Link
                    href="https://github.com/Pranav2317/ZenCloud"
                    target="_blank"
                    className="bg-black p-2 text-white rounded-full"
                  >
                    <Radio size={16} />
                  </Link>
                  <Link
                    href="https://zencloud-git-master-pranabh-dubeys-projects.vercel.app/"
                    target="_blank"
                    className="bg-black p-2 text-white rounded-full"
                  >
                    <Github size={16} />
                  </Link>
                </div>
              </div>
              <p className="text-start leading-relaxed text-sm sm:text-base">
                • Developed a responsive and modern cloud storage landing page for ZenCloud, a fictional SaaS product. <br />
                • Highlighted features like bank-level security, file versioning, user plans, and real user testimonials.
              </p>
            </div>
            <div className="w-full max-w-full">
              <Image
                src="/assets/zencloud.png"
                alt="ZenCloud Screenshot"
                width={700}
                height={300}
                className="rounded-lg w-full h-auto object-contain shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
              />
            </div>
          </NeonGradientCard>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 font-DegularBold">
      <Timeline data={data} />
    </div>
  );
}
