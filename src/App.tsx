import Headroom from "react-headroom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { createContext } from "react";

export const AppStateContext = createContext({});

function App() {
  return (
    <>
      <AppStateContext.Provider
        value={{
          theme: "light",
        }}
      >
        <div
          id="home"
          className="min-h-screen bg-white border-box scroll-smooth"
        >
          <Headroom>
            <Header />
          </Headroom>
          <Hero></Hero>
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </AppStateContext.Provider>
    </>
  );
}

export default App;
