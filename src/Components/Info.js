import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Have</span>
        </h3>
        <p className="info-description">
        At CBJ Accessories, we offer stylish and functional electronic accessories, including phone cases, webcam covers, and speaker accessories. Our commitment to quality ensures each product enhances your devices, backed by a seamless shopping experience and excellent customer service. Explore how CBJ Accessories can elevate your tech essentials with innovation and style.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Electronics Accessories"
          description="Explore a wide range of electronic accessories at CBJ Accessories designed to enhance and protect your devices. 
          From sleek phone cases to innovative webcam covers and speaker accessories, 
          we offer stylish solutions to elevate your tech experience."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Fashion Accessories"
          description="Discover fashion-forward accessories at CBJ Accessories that complement your personal style. Whether you're looking for trendy phone cases, 
          chic webcam covers, or unique speaker accessories, 
          we provide stylish options to accessorize your devices with flair."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Health Accessories"
          description="Enhance your daily routine with practical health accessories at CBJ Accessories. 
          Explore ergonomic phone cases, hygienic webcam covers, and innovative speaker accessories designed to promote your well-being while complementing your lifestyle."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
