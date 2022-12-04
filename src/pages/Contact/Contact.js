import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./contact.module.scss";
import Iframe from "react-iframe";
import MyButton from "../../Components/Button/Mybutton";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhehu0g",
        "template_elpjxxd",
        form.current,
        "IyE2K0EVX7mtrRSs6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row>
            <Col md>
              <form ref={form} onSubmit={sendEmail}>
                <Col className="mt-5">
                  <div className={styles.input}>
                    <Form.Group>
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                      />
                    </Form.Group>
                  </div>
                </Col>

                <Col className="mt-3">
                  <div className={styles.input}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        name="user_email"
                        placeholder="Your email address"
                      />
                    </Form.Group>
                  </div>
                </Col>

                <Col className="mt-3">
                  <div className={styles.input}>
                    <Form.Group>
                      <Form.Label>Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="We are glad to read your message"
                      />
                    </Form.Group>
                  </div>
                </Col>

                <Col className="mt-3">
                  <MyButton type="submit" value="Send">
                    Send
                  </MyButton>
                </Col>
              </form>
            </Col>
            <Col xs="4">
              <div className={styles.contactInfo}>
                <div>Contact us by phone:</div>
                <div className={styles.contactData}>
                  <i className="fa-solid fa-phone"></i> 0774.465.397
                </div>
                <div className={styles.contactData}>
                  <i className="fa-solid fa-phone"></i> 0774.543.343
                </div>
                <div className={styles.contactData}>
                  <i className="fa-solid fa-phone"></i> 0774.465.334
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div>We welcome you to our address:</div>
                <div className={styles.contactData}>
                  <i className="fa-solid fa-map-location-dot"></i>
                  <br></br>Ilfov, Str. Florilor, Nr. 5
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.container}>
        <div className={styles.responsive}>
          <Iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.321247181672!2d25.883490216492294!3d44.46758750740362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2013e4b4d459d%3A0x40d32d44da7e6b91!2sMagazin%20Outlet%20Ieftin%20by%20Viking%20Tools!5e0!3m2!1sen!2sro!4v1661093832863!5m2!1sen!2sro"
            width="996"
            height="583"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>

      <div className={styles.Link}>
        <a href="https://anpc.ro/" target="_blank" rel="noreferrer">
          ANPC
        </a>

        <a
          href="https://infocons.ro/cum-se-depune-o-reclamatie-ce-este-o-reclamatie-sesizare/?gclid=Cj0KCQjw9ZGYBhCEARIsAEUXITXGEpidfMGVDTgbJBlldD1mqYnaSsvws2PY_htRK-FOh4Z1aR8qb6gaAsMWEALw_wcB"
          target="_blank"
          rel="noreferrer"
        >
          PROTECTIA CONSUMATORULUI
        </a>

        <a href="http://www.anpm.ro/" target="_blank" rel="noreferrer">
          ANPM
        </a>

        <a
          href="https://anpc.ro/ce-este-sal/?ref=footer_3_6"
          target="_blank"
          rel="noreferrer"
        >
          ANPC - SAL
        </a>
      </div>
    </>
  );
};

export default Contact;
