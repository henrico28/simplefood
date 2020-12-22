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
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("chicken");
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [numPerPage] = useState(6);
  let [totalData, setTotalData] = useState();
  const indexOfLastPage = currentPage * numPerPage;
  const indexOfFirstPage = indexOfLastPage - numPerPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);

  const API_ID = "95ce69a6";
  const API_KEY = "b0161b6ae0d6217f731a94d8b97be6ea";
  const req = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(req);
      setData(res.data.hits);
      setTotalData(res.data.hits.length);
      console.log(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await axios.get(req);
    setData(res.data.hits);
    setTotalData(res.data.hits.length);
    setCurrentPage(1);
    setLoading(false);
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderRecipes = currentData.map((recipe, index) => {
    return (
      <Col md={3} sm={4} className="mx-3 my-2" key={index}>
        <RecipesCard
          name={recipe.recipe.label}
          calories={Number(recipe.recipe.calories).toFixed(2)}
          image={recipe.recipe.image}
        />
      </Col>
    );
  });

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
          <Form onSubmit={handleSearch}>
            <FormGroup className="justify-content-center" row>
              <Col sm={6} xs={8}>
                <Input
                  type="text"
                  className="recipes-search-input"
                  placeholder="Enter Recipes Name Here"
                  value={search}
                  onChange={handleSearchInput}
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
            <Row className="justify-content-center">{renderRecipes}</Row>
          </div>
          <div className="d-flex justify-content-center">
            <RecipePagination
              changePage={handleChangePage}
              currentPage={currentPage}
              numPerPage={numPerPage}
              totalData={totalData}
            />
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Recipes;
