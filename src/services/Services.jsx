import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import "./services.css";
import serviceData from "../assets/data/serviceData";

function Services() {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((ele, ind) => {
            return (
              <Col lg="3" md="4" key={ind}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="service__item"
                  style={{ background: `${ele.bg}` }}
                >
                  <span>
                    <i class={ele.icon}></i>
                  </span>
                  <div>
                    <h3>{ele.title}</h3>
                    <p>{ele.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
