import { useRef, FormEvent } from "react";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { email, github, linkedin, phone } from "../constants/data";
import { useInView } from "react-intersection-observer";

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

  const user = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          user.current,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            toast.success("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            toast.error("Something went wrong");
            console.log(error.text);
          },
        );
    }
  };

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex h-[90vh] w-screen gap-[10vw] max-lg:hidden max-md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="flex flex-col pl-[10vw] pt-[10vh]">
              <div className="pro flex gap-[1vw] text-[3vw]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <div className="mt-[5vh] p-[1vh] text-6xl text-purple-500 duration-500 hover:scale-110">
                  <SiMinutemailer />
                </div>
                <div className="mt-[5vh] py-[1vh] text-xl lowercase text-purple-500">
                  {email}
                </div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <div className="mt-[2vh] p-[1vh] text-5xl text-purple-500 duration-500 hover:scale-110">
                  <FaPhoneAlt />
                </div>
                <div className="ml-[1vw] mt-[2vh] py-[1vh] text-xl lowercase text-purple-500">
                  {phone}
                </div>
              </div>
              <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-[10vh] items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[8vh] duration-500 hover:text-[9vh]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[8vh] duration-500 hover:text-[9vh] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[10vh] duration-500 hover:text-[11vh] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[12vh] flex w-[42vw] flex-col gap-[1vh] overflow-hidden"
            >
              <div className="flex h-[8vh] w-[42vw] gap-[2vw] p-[1vh]">
                <input
                  className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} w-[15vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <input
                  className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} w-[26vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[42vw] p-[1vh]">
                <input
                  className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} h-[6vh] w-[41vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[42vw] p-[1vh]">
                <textarea
                  className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} h-[35vh] w-[41vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <button
                className="btn w-[9vw] rounded-full border-[0.4vh] border-purple-500 shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                type="submit"
              >
                <div className="flex items-center justify-center gap-[1vw] text-[1.8vw] text-purple-600 duration-500 hover:text-[1.9vw] hover:text-blue-500">
                  <div>Send</div>
                  <MdSend />
                </div>
              </button>
            </form>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[90vh] w-screen gap-[7vw] max-md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="flex flex-col pl-[8vw] pt-[10vh]">
              <div className="pro flex gap-[1vw] text-[2.6vw]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <div className="mt-[5vh] p-[1vh] text-5xl text-purple-500 duration-500 hover:scale-110">
                  <SiMinutemailer />
                </div>
                <div className="mt-[5vh] py-[1vh] text-xl lowercase text-purple-500">
                  {email}
                </div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <div className="mt-[2vh] p-[1vh] text-4xl text-purple-500 duration-500 hover:scale-110">
                  <FaPhoneAlt />
                </div>
                <div className="ml-[1vw] mt-[2vh] py-[1vh] text-xl lowercase text-purple-500">
                  {phone}
                </div>
              </div>
              <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-[10vh] items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[8vh] duration-500 hover:text-[8vh]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[7vh] duration-500 hover:text-[8vh] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[10vh] duration-500 hover:text-[11vh] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[12vh] flex w-[50vw] flex-col gap-[1vh] overflow-hidden"
            >
              <div className="flex h-[8vh] w-[50vw] gap-[2vw] p-[1vh]">
                <input
                  className={`w-[16vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <input
                  className={`w-[25vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[50vw] p-[1vh]">
                <input
                  className={`h-[6vh] w-[43vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[50vw] p-[1vh]">
                <textarea
                  className={`h-[35vh] w-[43vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <button
                className="btn w-[10vw] rounded-full border-[0.4vh] border-purple-500 shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                type="submit"
              >
                <div className="flex items-center justify-center gap-[1vw] p-1 text-[1.8vw] text-purple-600 duration-500 hover:text-[1.9vw] hover:text-blue-500">
                  <div>Send</div>
                  <MdSend />
                </div>
              </button>
            </form>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[130vh] w-screen flex-col items-center md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="mt-[5vh] flex w-screen flex-col items-center pb-[2vh]">
              <div className="pro flex w-[40vw] gap-[1vw] text-[4vw]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[4vh] flex w-screen flex-col items-center gap-[1vh] overflow-hidden"
            >
              <div className="w-[70vw] p-[1vh]">
                <input
                  className={`w-[68vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
              </div>
              <div className="w-[70vw] p-[1vh]">
                <input
                  className={`w-[68vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[70vw] p-[1vh]">
                <input
                  className={`h-[6vh] w-[68vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[70vw] p-[1vh]">
                <textarea
                  className={`h-[35vh] w-[68vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <div className="flex justify-center p-2">
                <button
                  className="mbtn w-[16vw] rounded-full border-[0.4vh] border-purple-500 shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                  type="submit"
                >
                  <div className="flex items-center justify-center gap-[1vw] p-2 text-[2.6vw] text-purple-600 duration-500 hover:text-[2.7vw] hover:text-blue-500">
                    <div>Send</div>
                    <MdSend />
                  </div>
                </button>
              </div>
            </form>
            <div className="Name flex items-center gap-[1vw] overflow-hidden">
              <div className="mt-[5vh] p-[1vh] text-4xl text-purple-500 duration-500 hover:scale-110">
                <SiMinutemailer />
              </div>
              <div className="mt-[5vh] py-[1vh] text-lg lowercase text-purple-500">
                {email}
              </div>
            </div>
            <div className="Name flex items-center gap-[1vw] overflow-hidden">
              <div className="mt-[2vh] p-[1vh] text-3xl text-purple-500 duration-500 hover:scale-110">
                <FaPhoneAlt />
              </div>
              <div className="ml-[1vw] mt-[2vh] py-[1vh] text-lg lowercase text-purple-500">
                {phone}
              </div>
            </div>
            <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-[10vh] w-full items-center justify-center gap-[2vw] overflow-hidden text-gray-500">
              <a
                href={github}
                target="_blank"
                className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[8vh] duration-500 hover:text-[8vh]`}
              >
                <FaGithub />
              </a>
              <a
                href={linkedin}
                target="_blank"
                className="linked text-[7vh] duration-500 hover:text-[8vh] hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="email text-[10vh] duration-500 hover:text-[11vh] hover:text-teal-500"
              >
                <MdEmail />
              </a>
            </div>
          </>
        )}
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />

      <div
        className={`ptitle flex h-[10vh] items-center justify-center gap-[1vw] bg-gradient-to-r sm:text-lg md:text-xl lg:text-2xl ${darkMode ? "bg-black from-purple-950 via-gray-900 to-black" : "bg-white from-purple-700 via-gray-400 to-white"} border-t-[0.1px] border-t-purple-400 shadow-md shadow-purple-500`}
      >
        <div
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} overflow-hidden py-1`}
        >
          Made by
        </div>
        <a className="flex gap-[0.5vw] overflow-hidden py-1" href={github}>
          <div
            className={`${darkMode ? "text-white" : "text-black"} overflow-hidden py-1`}
          >
            Aman
          </div>
          <div
            className={`${darkMode ? "text-purple-500" : "text-purple-600"} overflow-hidden py-1`}
          >
            Yadav
          </div>
        </a>
      </div>
    </>
  );
};

export default Contact;
