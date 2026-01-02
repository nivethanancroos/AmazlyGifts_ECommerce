import "./Login.css";
import giftImage from "../assets/images/gift.jpg";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        
        {/* LEFT SECTION */}
        <div className="login-left">
          <h1 className="title">Welcome to Amazely!</h1>
          <p className="subtitle">Sign in to explore our page.</p>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Example@email.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" />
          </div>

          {/* <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div> */}

          <div className="forgot">
             <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="btn-primary">Sign in</button>

          <div className="divider">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <button className="btn-social google">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
            Sign in with Google
          </button>

          <button className="btn-social facebook">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
            Sign in with Facebook
          </button>

          <p className="signup-text">
            Don&apos;t you have an account? <a href="/create-account">Sign up</a>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="login-right">
          <img src={giftImage} alt="Gift" />
        </div>

      </div>
    </div>
  );
}

export default Login;
