import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Minus, MoveRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState({
    about: false,
    projects: false,
    contact: false,
    cv: false,
  });
  const [dropIsOpen, setDropIsOpen] = React.useState(false);

  const handleHover = (id: string) => {
    setIsHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: true }));
  };

  const handleLeave = (id: string) => {
    setIsHovered((prevIsHovered) => ({ ...prevIsHovered, [id]: false }));
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <motion.div
          className={`flex flex-col xl:hidden justify-between items-center rounded-2xl mx-6 lg:mx-20 bg-[#0C0C0D] text-white h-20`}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex w-full justify-between items-center px-6 h-full">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                className="invert"
                alt="logo"
                width={70} // ✅ Slightly bigger logo
                height={70}
              />
            </Link>

            {/* Hamburger Icon */}
            <div
              className="cursor-pointer relative p-6"
              onClick={() => setDropIsOpen(!dropIsOpen)}
            >
              <motion.div
                initial={{ rotate: 0 }}
                className="absolute top-[10px] right-[15px]"
                animate={dropIsOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Minus size={30} /> {/* ✅ Bigger icon */}
              </motion.div>
              <motion.div
                initial={{ rotate: 90 }}
                animate={dropIsOpen ? { rotate: 180 } : { rotate: 90 }}
                className="absolute top-[10px] right-[15px]"
                transition={{ duration: 0.3 }}
              >
                <Minus size={30} /> {/* ✅ Bigger icon */}
              </motion.div>
            </div>
          </div>

          {/* Dropdown Menu */}
          {dropIsOpen && (
            <motion.div
              className="font-DegularBold text-base w-full" // ✅ Larger text
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href="/about">
                <div className="cursor-pointer w-full h-[60px] flex justify-start items-center border-b border-white/10 px-8">
                  <motion.span whileHover={{ x: 20 }} transition={{ duration: 0.3 }}>
                    EDUCATION
                  </motion.span>
                </div>
              </Link>
              <Link href="mailto:pranabhdubey1507@gmail.com">
                <div className="cursor-pointer w-full h-[60px] flex justify-start items-center border-b border-white/10 px-8">
                  <motion.span whileHover={{ x: 20 }} transition={{ duration: 0.3 }}>
                    CONTACT ME
                  </motion.span>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1RuiFFIN8PeEjAbi-oQievybHBa4QhGj7/view?usp=sharing"
              >
                <div className="cursor-pointer w-full h-[60px] flex justify-start items-center px-8">
                  <motion.span whileHover={{ x: 20 }} transition={{ duration: 0.3 }}>
                    MY CV
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden xl:flex relative z-50 justify-between items-center px-64 bg-[#0C0C0D] bg-opacity-40 text-white h-20">
        <Link href="/">
          <Image
            src="/images/logo.png"
            className="invert"
            alt="logo"
            width={70} // ✅ Slightly bigger logo
            height={70}
          />
        </Link>
        <ul className="flex space-x-16 font-sans font-bold text-base h-full items-center"> {/* ✅ Bigger text */}
          <Link href="/about">
            <motion.li
              whileHover={{ y: 5, opacity: 1 }}
              onMouseEnter={() => handleHover("about")}
              onMouseLeave={() => handleLeave("about")}
              className="p-4 cursor-pointer flex items-center space-x-2"
            >
              <span>EDUCATION</span>
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={
                  isHovered.about ? { rotate: -45, opacity: 1 } : { rotate: 0, opacity: 0 }
                }
              >
                <MoveRight size={20} /> {/* ✅ Slightly larger arrow */}
              </motion.div>
            </motion.li>
          </Link>
          <Link href="mailto:himanshuholmes@gmail.com">
            <motion.li
              whileHover={{ y: 5, opacity: 1 }}
              onMouseEnter={() => handleHover("contact")}
              onMouseLeave={() => handleLeave("contact")}
              className="p-4 cursor-pointer flex items-center space-x-2"
            >
              <span>CONTACT ME</span>
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={
                  isHovered.contact ? { rotate: -45, opacity: 1 } : { rotate: 0, opacity: 0 }
                }
              >
                <MoveRight size={20} />
              </motion.div>
            </motion.li>
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1LbZlg8fTypxeSuQqiFZPedDeD9_HhIUf/view?usp=sharing"
          >
            <motion.li
              whileHover={{ y: 5, opacity: 1 }}
              onMouseEnter={() => handleHover("cv")}
              onMouseLeave={() => handleLeave("cv")}
              className="p-4 cursor-pointer flex items-center space-x-2"
            >
              <span>MY CV</span>
              <motion.div
                initial={{ rotate: 0, opacity: 0 }}
                animate={
                  isHovered.cv ? { rotate: -45, opacity: 1 } : { rotate: 0, opacity: 0 }
                }
              >
                <MoveRight size={20} />
              </motion.div>
            </motion.li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
