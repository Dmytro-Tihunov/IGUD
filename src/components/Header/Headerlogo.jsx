import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Headerlogo() {
  return (
    <div className="headerLogoSection">
      <Container>
        <Row className="logoRow justify-content-center">
          <Col xs="auto" className="logoCol">
            <img
              src="../img/headerLogo.png"
              className="img-fluid"
              alt="logo"
            />
          </Col>
          <Col xs="auto" className="explanationCol">
            <div className="explanations">
              /ee: gu:/
              <br />
              <b>(informal)</b>
              <br/>
              1. Acryom: "I Got U,"
              <br/>
              a. Used to indicate taking care of the situation that one is in
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Headerlogo;
