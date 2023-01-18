import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <div className="container grid grid-three-column">
          <div className="footer-about">
            <h3>Sheikh Zainuddin</h3>
            <p>Aspiring Full Stack Web Developer</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <BsGithub className="icons" />
              </div>
              <div>
                <a
                  href="www.linkedin.com/in/sheikh-zainuddin-10ba54211"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>
              <a style={{ color: "#fff", textDecoration: "none" }} href="tel:">
                +91 9873775104
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Proudly made by Sheikh Zainuddin</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
