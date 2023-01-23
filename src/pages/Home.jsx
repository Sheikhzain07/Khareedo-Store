import React from "react";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";

function Home() {
  const year = new Date().getFullYear();
  return (
    <TitleOfApp title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product In {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  A common look for a sofa table is this smooth wood with
                  crosshatch ends, bringing to mind a coastal and beachside
                  decor.
                </p>
                <button className="buy__btn">SHOP NOW</button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default Home;
