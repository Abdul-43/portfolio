import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import About from './pages/About'
// import { BrowserRouter as Router} from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Home />
          <About />
          <Project />
          <Contact />
        </div>

    </div>
  );
}

export default App;
