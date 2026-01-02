import "./CreateAccount.css";
import giftImage from "../assets/images/gift.jpg";

function CreateAccount() {
  return (
    <div className="create-wrapper">
      <div className="create-container">

        {/* LEFT IMAGE GRID */}
        <div className="left-grid">
          <img src={giftImage} alt="gift" />
          <img src={giftImage} alt="gift" />
          <img src={giftImage} alt="gift" />
          <img src={giftImage} alt="gift" />
        </div>

        {/* RIGHT FORM */}
        <div className="right-form">
          <div className="lang">English (UK) ▾</div>

          <h1>Create Account</h1>

          <div className="social-row">
            
            {/* GOOGLE BUTTON */}
            <button className="social-btn google">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google"
              />
              Sign up with Google
            </button>

            {/* FACEBOOK BUTTON */}
            <button className="social-btn facebook">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
              Sign up with Facebook
            </button>

          </div>

          <div className="or-text">-OR-</div>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group password">
              <input type="password" placeholder="Password" />
             
            </div>

            <button className="create-btn">Create Account</button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/">Log in</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;
