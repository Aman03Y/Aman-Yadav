import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "../styles/skills.css";
import VanillaTilt from "vanilla-tilt";
import { skills } from "../constants/data";

const Skills: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [tabRef, inTabView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [mobRef, inMobView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [sRef, inSView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, {
        max: 20,
        gyroscopeMinAngleX: -15,
        gyroscopeMaxAngleX: 15,
        gyroscopeMinAngleY: -15,
        gyroscopeMaxAngleY: 15,
      });
    });
  });

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex h-[95vh] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex w-[20vw] justify-center gap-[1vw] text-[3.8vw]">
              <div className="text-purple-500">My</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Skills
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[3vh]">
              <div className="col1 flex gap-[2vw] p-[1vh]">
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[16vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-yellow-300 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[6vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-lime-500 p-[1vh] shadow-md shadow-lime-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-600 p-[1vh] shadow-md shadow-blue-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-orange-500 p-[1vh] shadow-md shadow-orange-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[2vw] p-[1vh]">
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-500 p-[1vh] shadow-md shadow-blue-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-sky-600 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-green-600 p-[1vh] shadow-md shadow-green-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-400 p-[1vh] shadow-md shadow-sky-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-gray-400 p-[1vh] shadow-md shadow-gray-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.php}
                    alt="php"
                  />
                </div>
                <div className="card flex h-[20vh] w-[10vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[133vh] w-screen flex-col items-center overflow-hidden max-md:hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill flex w-[20vw] justify-center gap-[1vw] text-[3.8vw]">
              <div className="text-purple-500">My</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Skills
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[4vh]">
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[16vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-yellow-300 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[6vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-lime-500 p-[1vh] shadow-md shadow-lime-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-600 p-[1vh] shadow-md shadow-blue-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-orange-500 p-[1vh] shadow-md shadow-orange-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-500 p-[1vh] shadow-md shadow-blue-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-sky-600 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-green-600 p-[1vh] shadow-md shadow-green-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-400 p-[1vh] shadow-md shadow-sky-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-gray-400 p-[1vh] shadow-md shadow-gray-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.php}
                    alt="php"
                  />
                </div>
                <div className="card flex h-[18vh] w-[12vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[120vh] w-screen flex-col items-center overflow-hidden max-sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill flex justify-center gap-[1vw] text-[3.5vh]">
              <div className="text-purple-500">My</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Skills
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[2vh]">
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[16vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-yellow-300 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[6vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[7vw] p-[1vh]">
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-lime-500 p-[1vh] shadow-md shadow-lime-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-600 p-[1vh] shadow-md shadow-blue-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-orange-500 p-[1vh] shadow-md shadow-orange-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-500 p-[1vh] shadow-md shadow-blue-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-sky-600 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[12vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-green-600 p-[1vh] shadow-md shadow-green-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[7vw] p-[1vh]">
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-400 p-[1vh] shadow-md shadow-sky-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-gray-400 p-[1vh] shadow-md shadow-gray-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.php}
                    alt="php"
                  />
                </div>
                <div className="card flex h-[13vh] w-[18vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[14vh] w-[7vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Small Devices Section */}
      <div
        ref={sRef}
        className={`flex h-[105vh] w-screen flex-col items-center overflow-hidden sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inSView && (
          <>
            <div className="skill flex justify-center gap-[1vw] text-[3.5vh]">
              <div className="text-purple-500">My</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Skills
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[1vh]">
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-yellow-300 p-[1vh] shadow-md shadow-yellow-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[23vh] w-[12vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[23vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-lime-500 p-[1vh] shadow-md shadow-lime-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-600 p-[1vh] shadow-md shadow-blue-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-orange-500 p-[1vh] shadow-md shadow-orange-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[23vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-500 p-[1vh] shadow-md shadow-blue-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[23vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-700 p-[1vh] shadow-md shadow-sky-600 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[23vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-green-600 p-[1vh] shadow-md shadow-green-500 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-sky-400 p-[1vh] shadow-md shadow-sky-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-gray-400 p-[1vh] shadow-md shadow-gray-400 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.php}
                    alt="php"
                  />
                </div>
                <div className="card flex h-[12vh] w-[22vw] items-center justify-center overflow-hidden rounded-[17%] border-[0.3vh] border-blue-400 p-[1vh] shadow-md shadow-blue-300 grayscale filter duration-300 hover:grayscale-0">
                  <img
                    className="h-[25vh] w-[13vw] transform transition-transform duration-500 hover:scale-110"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
