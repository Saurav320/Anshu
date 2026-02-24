import React from "react";
import "./Music.css";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();

  return (
    <div className="music">
      <button onClick={() => navigate("/card")}>
        Close
      </button>

      <h2>🎵 Songs</h2>

      <audio controls src="/song1.mp3"></audio>
      <audio controls src="/song2.mp3"></audio>
      <audio controls src="/song3.mp3"></audio>
    </div>
  );
};

export default Music;
