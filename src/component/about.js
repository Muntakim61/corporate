import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

export default function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>About us</h1>
          <div className="subtitle">Learn more about us.</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              We’re a passionate team of innovators, engineers, and
              problem-solvers dedicated to pushing boundaries and creating
              cutting-edge solutions that drive businesses forward.
            </p>

            <p>
              Whether you're a startup or an established corporation, we’re here
              to partner with you on your journey. Our mission is to deliver
              exceptional service, provide top-tier support, and constantly
              evolve to meet your needs. Let’s build something remarkable
              together!
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
