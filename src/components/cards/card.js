import React, { useState, useEffect } from "react";

import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const [lista, setLista] = useState(props.lista);

  return (
    <>
      {props.data.length !== 0 ? (
        <Card style={{ width: "16rem", textAlign: "center", height: "100%" }}>
          <Card.Img variant="top" src={props.data.img} alt="imagen" />
          <Card.Body>
            <Card.Title style={{ fontSize: "1em" }}>
              {props.data.description} <br /> {props.data.color}
            </Card.Title>
          </Card.Body>
          <b>{props.data.price}</b>
          <Card.Body>
            <Button
              variant="dark"
              onClick={async (e) => {
                setLista(props.data);
              }}
            >
              COMPRAR
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;
