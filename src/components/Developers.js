import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css"; // Custom CSS for styling the carousel
import ava01 from "../assets/images/ava-1.jpg";
import ava02 from "../assets/images/ava-2.jpeg";
import ava03 from "../assets/images/ava-3.jpg";
import ava04 from "../assets/images/ava-4.jpg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Developers = () => {
  const developers = [
    {
      image: ava01,
      name: "Harshit Tripathi",
      linkedin: "https://www.linkedin.com/in/harshit-tripathi-b2049020b/",
      instagram: "https://instagram.com/hrt_trp?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      image: ava02,
      name: "Aesha Gandhi",
      linkedin: "https://www.linkedin.com/in/aesha-gandhi-ce/",
      instagram: "https://www.instagram.com/aeshugandhi/",
    },
    {
      image: ava03,
      name: "Sahil Shukla",
      linkedin: "https://www.linkedin.com/in/sahil-shukla-61409a216",
      instagram: "https://www.instagram.com/",
    },
    {
      image: ava03,
      name: "Rishi Kaimal",
      linkedin: "https://www.linkedin.com/in/rishikaimal",
      instagram: "https://instagram.com/rishi_kaimal?igshid=ZGUzMzM3NWJiOQ==",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change slide every 2 seconds
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Team</h2>
      <Slider {...settings}>
        {developers.map((developer, index) => (
          <div key={index} className="testimonial-slide">
            <img
              src={developer.image}
              alt={developer.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{developer.name}</h3>
              <div className="testimonial-icons">
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" size={32} />
                </a>
                <div className="icon-gap" />
                <a
                  href={developer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon" size={32} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Developers;
