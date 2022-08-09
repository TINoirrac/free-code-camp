import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "./drummachine.scss";

const soundMap = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const DrumPad = ({ id, keyTrigger, soundUrl }) => {
  const currentAudio = useRef();

  const playSound = () => {
    currentAudio.current.play();
  };

  return (
    <div className="drum-pad" id={id} onClick={playSound}>
      <audio
        ref={currentAudio}
        className="clip"
        id={keyTrigger}
        src={soundUrl}
      />
      {keyTrigger}
    </div>
  );
};


const DrumMachine = () => {
  const [display, setDisplay] = useState("");

  const handleKeyDown = (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    setDisplay(audio.id)
    audio.play();

    console.log(audio);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return()=>{
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [display]);
  return (
    <div className="wrapper-drum">
      <div id="drum-machine">
        <div className="pad-bank">
          {soundMap.map((value, index) => (
            <DrumPad
              key={index}
              id={value.id}
              keyTrigger={value.keyTrigger}
              soundUrl={value.url}
              onKeyDown={(e) => {
                console.log(e);
              }}
              tabIndex="0"
            />
          ))}
        </div>
        <p id="display">{display}</p>
      </div>
    </div>
  );
};

export default DrumMachine;
