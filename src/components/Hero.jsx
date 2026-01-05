import "./Hero.css";

import img1 from "../assets/images/hero1.jpg";
import img2 from "../assets/images/hero2.jpg";
import img3 from "../assets/images/hero3.jpg";
import img4 from "../assets/images/hero4.jpg";
import img5 from "../assets/images/hero5.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Welcome to the World of <br />
        Personalized Gifts
      </h1>

      <div className="hero-images">
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <div className="hero-image-card" key={index}>
            <img src={img} alt="gift" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
