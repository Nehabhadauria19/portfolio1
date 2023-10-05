import Contact from "./components/Contact/contact";
import Edu from "./components/Education/edu";
import Foot from "./components/Footer/foot";
import Navbar from "./components/NavBar/navbar";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Intro from "./components/intro/intro";







function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Edu/>
      <Contact/>
      <Foot/>
        
    </div>
  );
}

export default App;
