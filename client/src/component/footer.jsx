import React from 'react'
import footer from "../assets/footer.svg";

const Footer = () => {
  return (
    <div>
        <div className="footer">
        <img className="footer" src={footer} alt="footer" />
      </div>
      <div className="footer-text">
        <p>Developed by team Tech Tribe 💖</p>
      </div>
    </div>
  )
}

export default Footer