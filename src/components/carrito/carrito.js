import React, { useState, useEffect } from "react";

import { OverlayTrigger, Button, Table, Popover } from "react-bootstrap";

const PopOverCarro = () => {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Carrito de Compras</Popover.Title>
      <Popover.Content>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>arregloCarrito</tbody>
          <tfoot>sumaTotal</tfoot>
        </Table>
      </Popover.Content>
    </Popover>
  );
};
const Carrito = (props) => {
    useEffect(() => {
        console.log(props.lista)
    }, [props.lista])
  return (
    <>
      <OverlayTrigger
        trigger="hover"
        placement="bottom-end"
        overlay={PopOverCarro}
      >
        <Button variant="ligth">Shop</Button>
      </OverlayTrigger>
    </>
  );
};

export default Carrito;
