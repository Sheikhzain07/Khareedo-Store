import React, { useState } from "react";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TitleOfApp title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>

              <Form className="auth__form" onSubmit={signup}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your Name"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button className="buy__btn auth__btn">Signup</button>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default Signup;
