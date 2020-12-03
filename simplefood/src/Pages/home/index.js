import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button color="success">Button 1</Button>
        </Col>
        <Col>
          <Button color="warning">Button 2</Button>
        </Col>
        <Col>
          <Button color="danger">Button 3</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
