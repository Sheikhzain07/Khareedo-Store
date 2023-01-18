import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56585.86891082277!2d81.56730718648646!3d27.574400591634827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999a957005f1d65%3A0x5df751d83e3a7717!2sBahraich%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1669915391682!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjvzqplg"
            className="contact-inputs"
            method="POST"
          >
            <input
              name="Username"
              placeholder="Enter Your Username"
              type="text"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              autoComplete="off"
              required
            />
            <textarea
              className="contact-inputs"
              rows="10"
              cols="30"
              name="Message"
              placeholder="Enter your message here"
              autoComplete="off"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
