import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white/75 flex justify-between py-6">
      <div>
        <p>Copyright ©.</p>
        <p>All rights reserved.</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Link
          href="https://www.linkedin.com/in/pranabh-dubey-66ba1b28a/"
          target="_blank"
          className="hover:text-white/50"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/Pranav2317"
          target="_blank"
          className="hover:text-white/50"
        >
          Github
        </Link>
        <Link
          href="mailto:dubeypranav@gmail.com"
          target="_blank"
          className="hover:text-white/50"
        >
          Email
        </Link>
 
        <Link
          href="/pdf/resume.pdf"
          target="_blank"
          className="hover:text-white/50"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Footer;
