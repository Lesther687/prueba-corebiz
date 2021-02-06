import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "0",
          margin: "0",
          width: "100%",
          alignContent: "center",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <h3>Localizacion</h3>
              <p>Avenida Andromed</p>
            </Col>
            <Col md={4}></Col>
            <Col md={4}>
              <p> Creado por Corebiz</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
