import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Best Products</span>
        </h3>

        <p className="dt-description">
        Discover our flagship product at CBJ Accessories, designed to elevate your tech experience with 
        unparalleled style and functionality. Our bestseller combines sleek design with robust protection, 
        ensuring your device stays secure while making a statement. Explore how our top product exemplifies our commitment to quality and innovation, 
        setting a new standard in electronic accessories.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Webcam Camera Cover"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Anti Dust Charger"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Brooch"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        {/* <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        /> */}
      </div>
    </div>
  );
}

export default Doctors;
