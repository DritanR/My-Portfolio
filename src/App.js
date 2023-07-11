import AboutMe from './AboutMe';
import './App.css';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
