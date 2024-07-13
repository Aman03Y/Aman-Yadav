import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VanillaTilt from "vanilla-tilt";

import "../styles/projects.css";
import { projects } from "../constants/data";
import Handwriting from "../assets/Handwriting.png";
import Adventure from "../assets/Adventure.png";

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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
        max: 5,
        gyroscopeMinAngleX: -5,
        gyroscopeMaxAngleX: 5,
        gyroscopeMinAngleY: -5,
        gyroscopeMaxAngleY: 5,
      });
    });
  });

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex h-[100vh] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[6vh]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400"
                      src={Handwriting}
                      alt="Handwriting"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[0.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwindcss
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                      </div>
                      <div className="flex gap-[0.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          firebase
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-white shadow-sm shadow-white">
                          FastApi
                        </div>
                      </div>
                    </div>
                    <div className="ptitle flex flex-col gap-[0.1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Handwriting Recogniation
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        2/2023 - 4/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.Handwriting.a}..
                    </div>
                    <a
                      className="-mt-[0.5vh]"
                      href={projects.Handwriting.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400"
                      src={Adventure}
                      alt="Adventure"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                    <div className="ptitle flex flex-col gap-[1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Adventure
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] -mt-[1vh] text-[1vw] text-white">
                      {projects.Adventure.a}..
                    </div>
                    <div className="mt-[1vh] flex gap-[4vw]">
                      <a href={projects.Adventure.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[140vh] w-screen flex-col items-center overflow-hidden max-md:hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[5vh]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400"
                      src={Handwriting}
                      alt="Handwriting"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwindcss
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                      </div>
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          Firebase
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-white shadow-sm shadow-white">
                          FastApi
                        </div>
                      </div>
                    </div>
                    <div className="ptitle -ml-[7vw] mt-[1vh] flex flex-col gap-[0.1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Handwriting Recognition
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        2/2024 - 4/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.Handwriting.a}..
                    </div>
                    <a href={projects.Handwriting.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2.5vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400"
                      src={Adventure}
                      alt="Adventure"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.9vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-400 shadow-sm shadow-blue-400">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                    <div className="ptitle -ml-[7vw] mt-[1vh] flex flex-col gap-[0.1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Adventure
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] -mt-[1vh] text-[1vw] text-white">
                      {projects.Adventure.a}..
                    </div>
                    <div className="mt-[0.5vh] flex gap-[5vw]">
                      <a href={projects.Adventure.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2.5vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[220vh] w-screen flex-col items-center overflow-hidden max-sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[4vh]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400"
                      src={Handwriting}
                      alt="Linguistic"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwindcss
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          Firebase
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-white shadow-sm shadow-white">
                          FastApi
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[16vw]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Handwriting Recogination
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        2/2024 - 4/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.Handwriting.a}..
                    </div>
                    <a href={projects.Handwriting.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.6vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400"
                      src={Adventure}
                      alt="Adventure"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[2.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[16vw]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Adventure
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.Adventure.a}..
                    </div>
                    <div className="mt-[0.5vh] flex gap-[10vw]">
                      <a href={projects.Adventure.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Small Devices Section */}
      <div
        ref={sRef}
        className={`flex h-[200vh] w-screen flex-col items-center overflow-hidden sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inSView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[4vh]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400"
                      src={Handwriting}
                      alt="Handwriting"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwindcss
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-orange-500 shadow-sm shadow-orange-500">
                          Firebase
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-white shadow-sm shadow-white">
                          FastApi
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[10vw]">
                      <div className="overflow-hidden text-[2.5vw] text-yellow-400">
                        Handwriting Recogination
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        2/2024 - 4/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.4vw] text-white">
                      {projects.Handwriting.a}..
                    </div>
                    <a href={projects.Handwriting.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.3vw] text-[2vh] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400"
                      src={Adventure}
                      alt="Adventure"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[3vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-400 shadow-sm shadow-blue-400">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[10vw]">
                      <div className="overflow-hidden text-[2.5vw] text-yellow-400">
                        Adventure
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.Adventure.a}..
                    </div>
                    <div className="flex gap-[10vw]">
                      <a href={projects.Adventure.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-[2vh] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
