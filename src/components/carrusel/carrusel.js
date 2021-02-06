import React, { useState, useEffect } from "react";
import "./carrusel.css";

import ProductCard from "../cards/card";
import { Carousel, Row } from "react-bootstrap";

const Carrusel = (props) => {
  const [prodCarrusel1, setprodCarrusel1] = useState([]);
  const [prodCarrusel2, setprodCarrusel2] = useState([]);
  const [prodCarrusel3, setprodCarrusel3] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const crearArrays = async () => {
      let primerArray = props.products.slice(0, 4);
      setprodCarrusel1(primerArray);

      let segundoArray = props.products.slice(4, 8);
      setprodCarrusel2(segundoArray);

      let tercerArray = props.products.slice(8, 12);
      setprodCarrusel3(tercerArray);
    };

    crearArrays();
  }, [props.products]);

  return (
    <>
      <Carousel style={{ width: "100%", height: "450px" }}>
        <Carousel.Item>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "80%",
              }}
            >
              {prodCarrusel1.map((producto, index) => (
                <ProductCard key={index} data={producto} />
              ))}
            </Row>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "80%",
              }}
            >
              {prodCarrusel2.map((producto, index) => (
                <ProductCard key={index} data={producto} />
              ))}
            </Row>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "80%",
              }}
            >
              {prodCarrusel3.map((producto, index) => (
                <ProductCard key={index} data={producto} />
              ))}
            </Row>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrusel;
