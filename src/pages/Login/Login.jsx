import "./Login.css";
import giftImage from "../../assets/images/gift.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  // =======================
  // STATE
  // =======================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =======================
  // HANDLERS
  // =======================
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      // TODO: Backend API call
      // POST /api/auth/login
      // body: { email, password }

      // Example success flow
      navigate("/landing");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* LEFT SECTION */}
        <div className="login-left">
          <h1 className="title">Welcome to Amazely!</h1>
          <p className="subtitle">Sign in to explore our page.</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="forgot">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            {error && <p className="error-text">{error}</p>}

            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          {/* SOCIAL LOGIN (UI ONLY) */}
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
            Don&apos;t have an account?{" "}
            <Link to="/create-account">Sign up</Link>
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
