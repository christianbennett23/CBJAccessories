import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to CBJ Accessories, where every accessory tells a story of style and functionality. 
        Embrace quality and innovation with us today!
        Discover a world of accessories that elevate your everyday with CBJ's commitment to quality and style.
        </p>

        <h4 className="about-text-title">How to order?</h4>

        <SolutionStep
          title="Choose your Product or wishlisted"
          description="Discover your perfect accessory at CBJ Accessories, where style meets functionality. Browse through our curated selection to find the ideal pieces that complement your lifestyle."
        />

        <SolutionStep
          title="Make a Order"
          description="Select your preferred items with ease and choose the checkout option that suits you best. Our dedicated team at CBJ Accessories ensures a seamless ordering process to bring your selections to your doorstep promptly."
        />

        <SolutionStep
          title="Get Your Product"
          description="Experience the quality and craftsmanship of CBJ Accessories firsthand. Whether it's stylish phone cases, sleek webcam covers, or innovative speaker accessories, our commitment to excellence ensures your satisfaction with every purchase."
        />
      </div>
    </div>
  );
}

export default About;
