import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Navbar } from "../../Components";
import { RecipesCard } from "../../Components";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <RecipesCard/>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
