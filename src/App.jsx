import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import CardPage from "./components/Cardpage";
import Gridgallery from "./components/Gridgallery";
import Secrate from "./components/Secrate";
import Music from "./components/Music";
import Message from "./components/Message";
import Secrateimg from "./components/Secrateimg";

function App() {
  const song1Ref = useRef(null);
  const song2Ref = useRef(null);
  const song3Ref = useRef(null);
  const song5Ref = useRef(null);

  // ⭐ ONLY ONE SONG FUNCTION
  const playOnly = async (ref) => {
    const all = [song1Ref, song2Ref, song3Ref, song5Ref];

    all.forEach((r) => {
      if (r.current && r !== ref) {
        r.current.pause();
      }
    });

    if (ref?.current) {
      ref.current.currentTime = 0;
      await ref.current.play().catch(() => {});
    }
  };

  return (
    <BrowserRouter>
      {/* GLOBAL PLAYERS */}
      <audio ref={song1Ref} src="/musics/song1.mp3" preload="auto" />
      <audio ref={song2Ref} src="/musics/song2.mp3" preload="auto" />
      <audio ref={song3Ref} src="/musics/song3.mp3" preload="auto" />
      <audio ref={song5Ref} src="/musics/song5.mp3" preload="auto" />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              playOnly={playOnly}
              song2Ref={song2Ref}
              song5Ref={song5Ref}
            />
          }
        />

        <Route
          path="/gallery"
          element={
            <Gallery
              playOnly={playOnly}
              song1Ref={song1Ref}
              song3Ref={song3Ref}
            />
          }
        />

        <Route path="/card" element={<CardPage />} />
        <Route path="/grid" element={<Gridgallery />} />
        <Route path="/secrate" element={<Secrate />} />
        <Route path="/music" element={<Music />} />
        <Route path="/message" element={<Message />} />
        <Route path="/secrateimg" element={<Secrateimg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;