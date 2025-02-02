import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ padding: "20px", margin: "20px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Rajput </span> 
            from <span className="purple">Saharanpur, India</span>.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            I graduated with a B.Tech in Computer Science and Engineering from 
            Vellore Institute of Technology, Bhopal.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            I have 3 months of internship experience at Jalan Technologies, and currently, 
            I'm working as a Software Engineer Trainee at 
            <span className="purple"> Volkswagen Group Technology India</span>.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6", marginTop: "15px" }}>
            Besides coding, here are a few activities I love to engage in:
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "15px" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={{ marginTop: "10px" }}>Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
