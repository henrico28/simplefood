import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
  Spinner,
} from "reactstrap";
import { RecipesCard, RecipePagination } from "../../Components";
import axios from "axios";
import { Wrapper } from "./style";

const Recipes = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [loading, setLoading] = useState(false);

  const API_ID = "95ce69a6";
  const API_KEY = "b0161b6ae0d6217f731a94d8b97be6ea";
  const req = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(req);
      setData(res.data.hits);
      console.log(res.data.hits);
      setLoading(false);
    };
    // fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  // const renderRecipes = data.map((item) => <RecipesCard title={item.label} />);

  if (loading) {
    return (
      <Wrapper>
        <div className="wrapper-recipes-loading">
          <Container
            className="min-vh-100 d-flex flex-column justify-content-center"
            fluid
          >
            <Row className="d-flex justify-content-center">
              <Spinner className="recipes-spinner" />
            </Row>
          </Container>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="wrapper-recipes">
        <Container fluid>
          <Form>
            <FormGroup className="justify-content-center" row>
              <Col sm={6} xs={8}>
                <Input
                  type="text"
                  className="recipes-search-input"
                  placeholder="Enter Recipes Name Here"
                />
              </Col>
              <Col sm={2} xs={4}>
                <Button className="recipes-search-button" type="submit">
                  Search
                </Button>
              </Col>
            </FormGroup>
          </Form>

          <div>
            <Row className="justify-content-center">
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Chicken Vesuvio"
                  calories="4228.043058200812"
                  image="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
                />
              </Col>
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Food 2"
                  calories="1000"
                  image="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
                />
              </Col>
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Food 3"
                  calories="1000"
                  image="https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Food 3"
                  calories="1000"
                  image="https://www.edamam.com/web-img/ae9/ae96650072cc599967d945c5e9961bb7.JPG"
                />
              </Col>
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Food 3"
                  calories="1000"
                  image="https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg"
                />
              </Col>
              <Col md={3} sm={4} className="mx-3 my-2">
                <RecipesCard
                  name="Food 3"
                  calories="1000"
                  image="https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg"
                />
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-center">
            <RecipePagination />
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Recipes;
