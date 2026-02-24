import { useState } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();
  const loverimges=[
    { id: 1, img: "/images/image.jpeg" },
    { id: 2, img: "/images/image1.jpeg" },
    { id: 3, img: "/images/image2.jpeg" },
    { id: 4, img: "/images/image3.jpeg" },
    { id: 5, img: "/images/image4.jpeg" },
    { id: 6, img: "/images/image5.jpeg" },
    { id: 7, img: "/images/image6.jpeg" },
    { id: 8, img: "/images/image7.jpeg" },
    { id: 9, img: "/images/image8.jpeg" },

  ];


  return (
    <div className="gallery">
      <p> तेरी खूबसूरती का क्या कहना,
चाँद भी तुझसे रोशनी माँगे,
तेरी मुस्कान इतनी प्यारी है,
फूल भी तुझसे महकना माँगे। 🌸✨</p>
      <button onClick={() => navigate("/card")}>❌</button>
     <div className="container3d">
        {loverimges.slice(0, 13).map((item, index) => (
          <span key={item.id} style={{ "--i": index + 1 }}>
            <img src={item.img} alt="3d-gallery" />
          </span>
        ))}
      </div>
      

<div className="btndiv">
     <button onClick={()=>{navigate("/grid")}}>gallery</button>
      <button onClick={()=>{navigate("/secrate")}}>secrate gallery</button>
</div>

    </div>
    
  );
}
