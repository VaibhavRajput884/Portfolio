import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <span className="purple">Vaibhav Rajput</span>, a tech enthusiast from <span className="purple">Saharanpur, India</span>. 
              <br />
              <br />I developed a deep passion for programming and have explored various languages and frameworks along the way.
              <br />
              <br />I am proficient in <b className="purple">Java</b>, <b className="purple">JavaScript</b>, and <b className="purple">React</b>.
              <br />
              <br />
              My main areas of interest include creating innovative 
              <i>
                <b className="purple"> Web Technologies and Products</b>
              </i>, 
              with a special focus on backend development and 
              modern frameworks.
              <br />
              <br />
              I love bringing ideas to life with technologies like <b className="purple">Node.js</b> and modern JavaScript frameworks like 
              <b className="purple"> React.js</b> and <b className="purple">Next.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I’d love to <span className="purple">connect </span>with you!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VaibhavRajput884"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vaibhav-rajput-623070206/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vaibhav.__rajput"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
