import { useEffect, useRef, useState } from "react";
import RAP from "react-audio-player";

const ReactAudioPlayer = RAP.default ? RAP.default : RAP;

const AudioPlayer = ({ audio }) => {
  const [muted, setMuted] = useState(false);
  const playerRef = useRef({});

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.audioEl.current.play();
    }
  }, []);

  return (
    <>
      <div className="hidden">
        <ReactAudioPlayer ref={playerRef} src={audio} autoPlay controls loop />
      </div>
      <button
        id="player-button"
        className="w-8 h-8 fixed left-4 bottom-4"
        onClick={() => {
          setMuted((p) => !p);
          if (!muted) {
            playerRef.current.audioEl.current.play();
          } else {
            playerRef.current.audioEl.current.pause();
          }
        }}
      >
        <img src="./assets/play-button.png" alt="play pause button" />
      </button>
    </>
  );
};

export default AudioPlayer;
