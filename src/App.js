import "./styles.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Modals from "./components/modals/Modals";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Modals />
      <Contact />
    </div>
  );
}

export default App;
