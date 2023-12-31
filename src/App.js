import React from "react";
import Net from "./Net";
import About from "./About";
import Contact from "./Contact";
import { AppProvider } from "./context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Net />
        <section style={{ marginTop: "720px" }}>
          <About />
          <Projects />
          <Contact />
        </section>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
