import React, { useState } from "react";
import "./Secrate.css";
import { useNavigate } from "react-router-dom";
const Secrate = () => {
  const navigate = useNavigate();
  const [num, setnum] = useState("");
  const [showImages, setShowImages] = useState(false);



  const handlechange = (e) => {
    setnum(e.target.value);
  };

  const checkPassword = () => {
    if (num.toLowerCase() === "anshu143") {
      setShowImages(true);
    } else {
      alert("Wrong Password ❤️");
    }
  };

  return (
    <div className="secratediv">
      <div style={{ background: "lightyellow", margin: "10px" }}>
        <p>Happy Birthday to the most beautiful and cutest girl —
          May your smile always shine brighter than the stars,
          May your heart always stay as pure as it is today,
          And may your life be filled with love, laughter, and endless happiness. ✨💖</p>
      </div>
      <p className="secratep">hey cutie this is special images for our secret memories ❤️</p>

      <input
        type="password"
        className="scerateclass"
        id="secratepass"
        placeholder="enter the secrete password"
        value={num}
        onChange={handlechange}
      />

      <div>

      </div>
      <button className="secretbtn" onClick={checkPassword}>
        Unlock ❤️
      </button>


      {showImages && (
        navigate("/secrateimg")
      )}

    </div>
  );
};

export default Secrate;
