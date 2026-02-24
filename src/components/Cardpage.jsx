import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cardpage.css";

// 👉 last card ke liye local image
// import lastImg from "../assets/image9.jpeg";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image.jpeg";


export default function CardPage() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/cb/49/c0/cb49c07a0f164e1c115d9e241b61a587.gif",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/97/04/9c/97049c0429d2675ae14169950a50dfc4.gif",
    },
    {
      id: 3,
      img: image2 ,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/c1/af/ac/c1afac85225d1a1990c47138be88200c.jpg",
    },
    {
      id: 5,
      img: image1, // ✅ FILE IMAGE (last card)
    },
  ];
   const cardss = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/cb/49/c0/cb49c07a0f164e1c115d9e241b61a587.gif",
      quote: "🎉Many Many Happy Returns of the Day💖",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/97/04/9c/97049c0429d2675ae14169950a50dfc4.gif",
      quote: "✨Forever ride 💫"
    },
    {
      id: 3,
      img: "" ,
      quote: " this is you"
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/c1/af/ac/c1afac85225d1a1990c47138be88200c.jpg",
      quote: "👉 🌸 Yeh sirf tumhare liye 🌸👉 🤍 Har khwab poora ho, yahi dua hai 🤍"
    },
    {
      id: 5,
      img: image1,
      quote: "❤️ Ye din sirf ek birthday nahi, ek feeling hai ❤️",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="cardPage">
      {/* CARD */}
      <div className="card">
        <img
          src={cards[index].img}
          alt={`card-${index + 1}`}
          height="300px"
        />
        
        {/* ✨ QUOTE */}
        <p className="quote">{cardss[index].quote}</p>

        {/* 👉 sirf last card pe extra buttons */}
        {index === cards.length - 1 && (
          <>
            <button onClick={() => navigate("/message")}>💌 Message</button>
            <button onClick={() => navigate("/gallery")}>🖼 Gallery</button>
            <button onClick={() => navigate("/music")}>🎵 Music</button>
          </>
        )}
      </div>

      {/* CARD KE BAHAR */}
      <div className="navBtns">
        <button onClick={prev} disabled={index === 0}>
          ⬅ Prev
        </button>
        <button onClick={next} disabled={index === cards.length - 1}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
