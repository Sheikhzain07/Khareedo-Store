import React from "react";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

function Login() {
  return (
    <TitleOfApp title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4">Login</h3>

              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your Email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="password" placeholder="Enter your Password" />
                </FormGroup>
                <button className="but_btn auth_btn">Login</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default Login;
