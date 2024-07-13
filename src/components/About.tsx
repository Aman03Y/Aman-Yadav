import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import { Bio } from "../constants/data.ts";
import "../styles/About.css";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".about-icon") as HTMLElement, {
      glare: true,
      "max-glare": 0.2,
    });
  });

  return (
    <>
      <div
        ref={ref}
        className={`relative h-[90vh] w-screen overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {/* Desktop Section */}
        {inView && (
          <>
            <div className="absolute top-[10vh] flex gap-[8vw] pl-[10vw] max-lg:hidden max-md:hidden">
              <div className="about-icon mt-[10vh] flex h-[20vh] w-[300px] items-center justify-center border-[0.5vh] border-purple-300 text-[5vh] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex w-[50vw] flex-col gap-[2vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[7vh]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[2vh]`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex w-[50vw] justify-center overflow-hidden pt-[2vh] text-[4vh] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-[2vh] h-[15vh] overflow-hidden p-[2vh]">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-[7.8vh] w-[160px] rounded-full border-[0.3vh] border-purple-700 text-[2.5vh] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[2.7vh] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Tablet Section */}
        {inView && (
          <>
            <div className="absolute top-[7vh] flex gap-[8vw] pl-[8vw] max-md:hidden lg:hidden">
              <div className="about-icon mt-[10vh] flex h-[17vh] w-[260px] items-center justify-center border-[0.5vh] border-purple-300 text-[4.5vh] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex w-[50vw] flex-col gap-[2vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[6vh]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[2vh] text-[15px]`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex w-[50vw] justify-center overflow-hidden pt-[2vh] text-[3.7vh] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-[2vh] h-[15vh] overflow-hidden p-[2vh]">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-[7.8vh] w-[150px] rounded-full border-[0.3vh] border-purple-700 text-[2.5vh] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[2.7vh] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Mobile Section */}
        {inView && (
          <>
            <div className="relative -mt-[10vh] flex flex-col items-center justify-center gap-[2vh] md:hidden">
              <div className="about-icon mt-[10vh] flex h-[18vh] w-[250px] items-center justify-center border-[0.5vh] border-purple-300 text-[4.5vh] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex w-[80vw] flex-col gap-[1.5vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[5vh]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[1.2vh] text-[13px]`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex justify-center overflow-hidden text-[3.1vh] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-[2vh] -mt-[2vh] h-[15vh] overflow-hidden p-[2vh]">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-[7vh] w-[130px] rounded-full border-[0.3vh] border-purple-700 text-[2.3vh] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[2.5vh] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
