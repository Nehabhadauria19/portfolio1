import React from "react";
import "./contact.css";
import linkedin from "../../assets/linkedin-2935407_640.png";



const Contact = () => {
 

  return (
    <div className="contact">
      <h1 className="contactPageTitle">CONTACT ME !</h1>
      <span className="contactDesc">
        Please fill out the form to discuss any work opportunities
      </span>
      <form action="https://formspree.io/f/meqbzjoj" method="POST" className="contactForm" >
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className="submitBtn" value="send">
          Submit
        </button>
        <div className="links">
          <a
            href="http://www.linkedin.com/in/neha-bhadauria-19july2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
