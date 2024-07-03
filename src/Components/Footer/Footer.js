import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">
          <h3>Ankit Kumar</h3>
        </div>
        <div className="footer-social-icons">
          <a
            href="https://github.com/iamankit7667"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-kumar-57b128284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://x.com/Ankit_7667"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <div className="footer-copywright">
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
