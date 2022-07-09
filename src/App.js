import "./styles.scss";
import Navbar from "./components/navbar/navbar.js";
import Intro from "./components/intro/intro.js";
import Experience from "./components/experience/experience.js";
import Contact from "./components/contact/contact.js";

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
