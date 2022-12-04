import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className={styles.mainFooter}>
      <Container>
        <Row>
          <Col md>
            <div className={styles.col1}>
              <div>
                <h4>S.C Viking Toosl S.R.L</h4>
                <ul className="list-unstyled">
                  <li>+4 0774465397</li>
                  <li>Ilfov Bacu</li>
                  <li>Str. Cirorgarlei 145</li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md>
            <div className={styles.col2}>
              <div>
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://anpc.ro/" target="_blank" rel="noreferrer">
                      ANPC
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://infocons.ro/cum-se-depune-o-reclamatie-ce-este-o-reclamatie-sesizare/?gclid=Cj0KCQjw9ZGYBhCEARIsAEUXITXGEpidfMGVDTgbJBlldD1mqYnaSsvws2PY_htRK-FOh4Z1aR8qb6gaAsMWEALw_wcB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PROTECTIA CONSUMATORULUI
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.anpm.ro/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ANPM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md>
            <div className={styles.col3}>
              <div>
                <h4>Site Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/contact">CONTACT US</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/service">SERVICES</a>
                  </li>
                  <li>
                    <a href="/projects">PROJECTS</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <p className={styles.col3}>
            <span className={styles.date}>
              {new Date().getDate()} {new Date().getMonth()}{" "}
              {new Date().getFullYear()}{" "}
            </span>{" "}
            &copy; Iordache Catalin | All rights reserved |
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
