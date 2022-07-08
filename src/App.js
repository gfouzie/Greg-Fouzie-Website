import "./styles.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
