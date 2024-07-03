import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Front-end Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typing;
