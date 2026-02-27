import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import image0 from "../assets/image0.jpeg";

export default function Home({ playOnly, song2Ref, song5Ref }) {
  const PASS = "happy123";
  const navigate = useNavigate();
  const [pass, setPass] = useState("");

  useEffect(() => {
    playOnly(song2Ref);
  }, []);

  const check = async () => {
    if (pass === PASS) {
      await playOnly(song5Ref);
      navigate("/card");
    } else {
      alert("Wrong Password ❌");
    }
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${image0})` }}>
      <section className="section1">
        <h1>🎁 Birthday Surprise</h1>
        <div className="gift">
          <img src="https://i.pinimg.com/originals/37/86/40/378640f1af783a3b8938593334118e96.gif" alt=" imagebox src " width="100px" height="150px" />
        </div>


        <input
          placeholder="Enter Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={check}>Unlock</button>
      </section>
    </div>
  );
}