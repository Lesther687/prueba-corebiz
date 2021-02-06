import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";
import logo from "../../statics/logo.png";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ height: "55px" }}>
        <Navbar.Brand href="/" style={{ marginLeft: "18%" }}>
          <img src={logo} alt="corebiz" style={{ height: "45px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline style={{ marginLeft: "5%", width: "60%" }}>
            <FormControl
              type="text"
              placeholder="que estás buscando?"
              className="mr-sm-2"
              style={{ width: "80%" }}
            />
            <Button variant="">
              <Icon size={"20px"} icon={search} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
