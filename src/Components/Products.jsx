import React from "react";
// import Tab from "react-bootstrap/Tab ";
// import Tab from "react-bootstrap/Tabs";
import shampoo from "../Images/shampoo.jpg";
import { Card, Button, ListGroup } from "react-bootstrap";
import "../App.css";
function Products() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <b>New Launches</b>
      </h1>
      <br />
      <br />

      <div className="product">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={shampoo} />
          <Card.Body>
            <Card.Title>Hair Fall Control Shampoo</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>For</b> &nbsp;&nbsp;&nbsp;Hairfall Reduction
              </ListGroup.Item>
              <ListGroup.Item>
                <b>With</b>&nbsp;&nbsp;&nbsp; Keratin Biotin Vitamin B5
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Rs 399</b>&nbsp;&nbsp;
                <del>Rs 1194</del>&nbsp;
                <span style={{ color: "green" }}>17% off</span>
              </ListGroup.Item>
            </ListGroup>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="secondary" sixe="lg">
                Add to cart
              </Button>
              <Button variant="dark" size="lg">
                Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={shampoo} />
          <Card.Body>
            <Card.Title>Hair Fall Control Shampoo</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>For</b> &nbsp;&nbsp;&nbsp;Hairfall Reduction
              </ListGroup.Item>
              <ListGroup.Item>
                <b>With</b>&nbsp;&nbsp;&nbsp; Keratin Biotin Vitamin B5
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Rs 399</b>&nbsp;&nbsp;
                <del>Rs 1194</del>&nbsp;
                <span style={{ color: "green" }}>17% off</span>
              </ListGroup.Item>
            </ListGroup>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="secondary" sixe="lg">
                Add to cart
              </Button>
              <Button variant="dark" size="lg">
                Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={shampoo} />
          <Card.Body>
            <Card.Title>Hair Fall Control Shampoo</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>For</b> &nbsp;&nbsp;&nbsp;Hairfall Reduction
              </ListGroup.Item>
              <ListGroup.Item>
                <b>With</b>&nbsp;&nbsp;&nbsp; Keratin Biotin Vitamin B5
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Rs 399</b>&nbsp;&nbsp;
                <del>Rs 1194</del>&nbsp;
                <span style={{ color: "green" }}>17% off</span>
              </ListGroup.Item>
            </ListGroup>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="secondary" sixe="lg">
                Add to cart
              </Button>
              <Button variant="dark" size="lg">
                Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Products;
