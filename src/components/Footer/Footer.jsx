import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1>Abouts</h1>
        <div className="left-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          ad! Autem quia natus consequuntur ipsam beatae necessitatibus eum
          architecto vitae? Veniam perferendis, soluta doloremque autem
          excepturi maxime sapiente quos sunt!
        </div>
      </div>
      <div className="conetr">
        <h1>Contact Us</h1>
        <div className="conetr-container">
          <div className="socialIcons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt=""
            />
          </div>
          <div className="socialIcons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt=""
            />
          </div>
          <div className="socialIcons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Address</h1>
        <div className="right-container">
          <div className="addInfo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3247/3247310.png"
              alt=""
            />
            <span> (+212) 6123456789</span>
          </div>
          <div className="addInfo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/553/553416.png"
              alt=""
            />
            <span>London</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
