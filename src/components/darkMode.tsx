import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode: React.FC<{ darkMode: boolean; mobile?: true }> = ({
  darkMode,
  mobile,
}) => {
  return (
    <>
      <div
        className="contact fixed right-[3vw] top-[1.8vh] z-10 flex cursor-pointer items-center justify-center rounded-full border-2 border-violet-700 p-[0.8%] text-2xl text-purple-400 duration-[0.4s] hover:shadow-md hover:shadow-violet-800 max-lg:hidden max-md:hidden"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
      <div
        className="contact fixed right-[0.5vw] top-[1.9vh] z-10 flex cursor-pointer items-center justify-center rounded-full border-2 border-violet-700 p-[0.8%] text-2xl text-purple-400 duration-[0.4s] hover:shadow-md hover:shadow-violet-800 max-md:hidden lg:hidden"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
      {mobile && (
        <div
          className="flex items-center justify-center gap-2 rounded-full border-2 border-violet-700 py-[3%] text-xl text-purple-400 duration-[0.4s] hover:shadow-md hover:shadow-violet-800 md:hidden lg:hidden"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="text-2xl">{darkMode ? <FaSun /> : <FaMoon />}</div>
          <div>{darkMode ? "Dark Mode" : "Light Mode"}</div>
        </div>
      )}
    </>
  );
};

export default DarkMode;
