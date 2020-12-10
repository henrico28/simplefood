import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Navbar } from "../../Components";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
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
    </React.Fragment>
  );
};

export default Home;
