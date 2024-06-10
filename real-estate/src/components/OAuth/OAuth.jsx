import { FcGoogle } from "react-icons/fc";
import "../OAuth/OAuth.css";
import "../CommonCss/CommonAuth.css";

function OAuth() {
  return (
    <div className="google-container">
      <button type="submit" className="continue-google">
        <FcGoogle className="google-icon" />
        continue with google
      </button>
    </div>
  );
}

export default OAuth;
