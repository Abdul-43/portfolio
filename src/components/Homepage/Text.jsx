import React from "react";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Engineer",
          "MERN Stack Specialist",
          "Architecting Fleet Management Solutions",
          "Engineering Real-Time IoT Systems",
          "Designing High-Performance APIs",
          "Developing Interactive Kiosk Platforms",
          "Building Enterprise EdTech Systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 50,
      }}
    />
  );
}

export default Text;