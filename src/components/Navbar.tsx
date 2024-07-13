import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import VanillaTilt from "vanilla-tilt";
import "../styles/Navbar.css";
import { Link } from "react-scroll";
import DarkMode from "./darkMode";
import { setDarkMode } from "../dark-mode/reducer";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";

const Navbar: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [menu, setMenu] = useState<boolean>(false);

  const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".logo") as HTMLElement);
  });

  return (
    <>
      <nav
        className={`${darkMode ? "bg-black shadow-black" : "bg-white shadow-white"} fixed z-10 h-[10vh] w-screen shadow-sm`}
      >
        {/* Desktop Section */}
        <div className="max-lg:hidden max-md:hidden">
          <Link
            activeClass="active1"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <div className="logo absolute left-[9.8vw] cursor-pointer p-1 text-[5vh] font-bold text-purple-500">
              Aman
            </div>
          </Link>
          <ul className="list absolute left-[32vw] top-0 flex gap-[0.3vw] pt-[2.5vh] text-[25px] text-purple-500">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-78}
            >
              <li className="about flex w-[95px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[26px] hover:text-amber-400">
                About
              </li>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-78}
            >
              <li className="skills flex w-[80px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[26px] hover:text-amber-400">
                Skills
              </li>
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-78}
            >
              <li className="project flex w-[125px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[26px] hover:text-amber-400">
                Projects
              </li>
            </Link>
          </ul>
          <Link
            activeClass="activeContact"
            to="contact"
            spy={true}
            smooth={true}
            offset={-78}
            className="contact absolute right-[8.5vw] top-[1.5vh] cursor-pointer rounded-full border-2 border-violet-700 p-[1.5vh] text-[19.5px] text-purple-400 duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[20.5px] hover:text-amber-400 hover:shadow-md hover:shadow-violet-800"
          >
            Contact Me
          </Link>
        </div>

        {/* Tablet Section */}
        <div className="max-md:hidden lg:hidden">
          <Link
            activeClass="active1"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <div className="logo absolute left-[7vw] top-[1.4vh] cursor-pointer text-[4.5vh] font-bold text-purple-500">
              Aman
            </div>
          </Link>
          <ul className="list absolute left-[25.5vw] top-0 flex gap-[0.3vw] pt-[2.5vh] text-[21px] text-purple-500">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-78}
            >
              <li className="about flex w-[90px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[22px] hover:text-amber-400">
                About
              </li>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-75}
            >
              <li className="skills flex w-[70px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[22px] hover:text-amber-400">
                Skills
              </li>
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-75}
            >
              <li className="project flex w-[95px] cursor-pointer items-center justify-center duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[22px] hover:text-amber-400">
                Projects
              </li>
            </Link>
          </ul>
          <Link
            activeClass="activeContact"
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            className="contact absolute right-[5.6vw] top-[1.5vh] cursor-pointer rounded-full border-2 border-violet-700 p-[1.2vh] text-[17.5px] text-purple-400 duration-[0.4s] hover:-translate-x-1 hover:-translate-y-1 hover:text-[18.5px] hover:text-amber-400 hover:shadow-md hover:shadow-violet-800"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="overflow-hidden md:hidden lg:hidden">
          <Link
            activeClass="active1"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
          >
            <div className="logo absolute left-[7vw] top-[1.2vh] cursor-pointer pr-[1vw] text-[4vh] font-bold text-purple-500">
              Aman
            </div>
          </Link>
          <div
            onClick={() => setMenu(true)}
            className="menu z-25 absolute right-0 top-0 mr-[7vw] mt-[3vh] text-violet-600"
          >
            <CgMenuRight size={25} />
          </div>
        </div>
      </nav>
      {menu && (
        <>
          <div
            onClick={() => setMenu(false)}
            className="fixed z-20 h-screen w-screen bg-black opacity-60"
          />
          <div
            className={`mNav fixed right-0 flex h-screen w-[50vw] flex-col gap-[2vh] pl-[3vw] md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"} z-20`}
          >
            <ul className="mt-[10vh] flex flex-col gap-[2vh] text-[3vh] text-purple-500">
              <div
                onClick={() => setMenu(false)}
                className="absolute right-0 top-0 z-20 mr-[7vw] mt-[3vh]"
              >
                <AiOutlineClose size={25} />
              </div>
              <Link
                onClick={() => setMenu(false)}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
              >
                <li className="aboutm inline-block w-full cursor-pointer p-1 px-1 duration-[0.4s] hover:translate-x-1 hover:translate-y-1 hover:text-[3.1vh] hover:text-amber-400">
                  About
                </li>
              </Link>
              <Link
                onClick={() => setMenu(false)}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
              >
                <li className="skillsm inline-block w-full cursor-pointer p-1 px-1 duration-[0.4s] hover:translate-x-1 hover:translate-y-1 hover:text-[3.1vh] hover:text-amber-400">
                  Skills
                </li>
              </Link>
              <Link
                onClick={() => setMenu(false)}
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-75}
              >
                <li className="projectm inline-block w-full cursor-pointer p-1 px-1 duration-[0.4s] hover:translate-x-1 hover:translate-y-1 hover:text-[3.1vh] hover:text-amber-400">
                  Projects
                </li>
              </Link>
            </ul>
            <Link
              onClick={() => setMenu(false)}
              activeClass="activeContact"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              className="contactm mb-3 ml-1 mt-1 flex w-[150px] cursor-pointer justify-center rounded-full border-2 border-violet-700 p-[1.2vh] text-[2.4vh] text-purple-400 duration-[0.4s] hover:translate-x-1 hover:translate-y-1 hover:text-[2.2vh] hover:text-amber-400 hover:shadow-md hover:shadow-violet-800"
            >
              Contact Me
            </Link>
            <div
              onClick={() => dispatch(setDarkMode(!darkMode))}
              className="contactm mt-[32vh] w-[180px] cursor-pointer overflow-hidden p-[1.2vh]"
            >
              <DarkMode darkMode={darkMode} mobile={true} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
