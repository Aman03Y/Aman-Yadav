import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import DarkMode from "./components/darkMode";
import { setDarkMode } from "./dark-mode/reducer";

const App: React.FC = () => {
  const useAppDispatch = useDispatch.withTypes<AppDispatch>();
  const useAppSelector = useSelector.withTypes<RootState>();
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state: RootState) => state.darkMode);

  return (
    <>
      <Navbar darkMode={isDarkMode} />
      <section id="home">
        <Home darkMode={isDarkMode} />
      </section>
      <section id="about">
        <About darkMode={isDarkMode} />
      </section>
      <section id="skills">
        <Skills darkMode={isDarkMode} />
      </section>
      <section id="project">
        <Projects darkMode={isDarkMode} />
      </section>
      <section id="contact">
        <Contact darkMode={isDarkMode} />
      </section>
      <div onClick={() => dispatch(setDarkMode(!isDarkMode))}>
        <DarkMode darkMode={isDarkMode} />
      </div>
    </>
  );
};

export default App;
