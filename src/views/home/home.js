import React, { useEffect, useState, lazy, Suspense } from "react";

import { getProducts, getProductsByID } from "../../services/productos.api";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Image, Row, Container, Col } from "react-bootstrap";
import banner from "../../statics/Banner.jpg";
import Carrito from "../../components/carrito/carrito";

const Carrusel = lazy(() => import("../../components/carrusel/carrusel"));

const Home = (props) => {
  const [productos, setproductos] = useState([]);
  const [loading, setloading] = useState(false);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      let productos = await getProducts();
      console.log(
        "🚀 ~ file: carrusel.js ~ line 10 ~ fetchData ~ productos",
        productos
      );
      setproductos(productos);
      setloading(false);
    };

    fetchData();
  }, [lista]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "0",
          margin: "0",
          width: "100%",
          alignContent: "center",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <Container
          style={{}}
        >
          <Row style={{width: '100%'}}>
            <Col md={10}>
              <Header />
            </Col>
            <Col md={2} style={{padding: '1%'}}>
              <Carrito lista={lista}/>
            </Col>
          </Row>
        </Container>
      </div>
      <Image src={banner} fluid style={{ marginBottom: "3%" }} />

      <Row
        style={{
          widht: "100%",
          padding: "0",
          margin: "0",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Suspense fallback={<div> loading...</div>}>
          <Carrusel products={productos} lista={lista}/>
        </Suspense>
      </Row>

      <Footer
        style={{ paddingBottom: "0", marginBottom: "0 !important" }}
      ></Footer>
    </>
  );
};

export default Home;
