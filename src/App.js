import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Qualification } from "./components/qualification/Qualification";
import { Skills } from "./components/skills/Skills";
function App() {
  return <div className="App">
    <Header />
    <Navbar/>
    <About/>
    <Qualification/>
    <Skills/>
    <Projects/>
    <Contact/>
  </div>;
}

export default App;
