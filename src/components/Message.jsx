import { useNavigate } from "react-router-dom";
import "./Message.css"
export default function Message() {
  const navigate = useNavigate();

  return (
    <div className="messagePage">
      <h1>For You 💖</h1>

      <p>
        You are the cutest girl 💕 <br/>
        Keep smiling always 😊 <br/>
        You make life beautiful ✨
      </p>

      <button onClick={() => navigate("/card")}>
        🔙 Back
      </button>
    </div>
  );
}
