import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Wrapper } from "./style";

const Footer = (props) => {
  return (
    <Wrapper>
      <div className="footer-wrapper">
        <Container className="shadow-lg p-3" fluid>
          <Row>
            <Col>
              <h1 className="footer-text mt-1 text-center">
                Powered by{" "}
                <a
                  href="https://www.edamam.com/"
                  className="footer-text-url"
                  rel="noreferrer"
                  target="_blank"
                >
                  Edamam
                </a>{" "}
                | Build with ♥ | Copyright © SimpleFood 2020
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Footer;
