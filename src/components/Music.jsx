import React from "react";
import "./Music.css";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();

  const handlePlay = (e) => {
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio) => {
      if (audio !== e.target) {
        audio.pause();
      }
    });
  };

  return (
    <div className="music">
      <button onClick={() => navigate("/card")}>Close</button>

      <h2>🎵 Songs</h2>

      <audio controls src="/musics/song1.mp3" onPlay={handlePlay} />
      <audio controls src="/musics/song2.mp3" onPlay={handlePlay} />
      <audio controls src="/musics/song3.mp3" onPlay={handlePlay} />
      <audio controls src="/musics/song4.mp3" onPlay={handlePlay} />
      <audio controls src="/musics/song5.mp3" onPlay={handlePlay} />
    </div>
  );
};

export default Music;