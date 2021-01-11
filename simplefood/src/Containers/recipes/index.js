import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
  FormText,
} from "reactstrap";
import { RecipesCard, RecipePagination } from "../../Components";
import { Wrapper } from "./style";

const Recipes = ({
  setStep,
  recipes,
  curretSearch,
  searchRecipe,
  setRecipe,
  flag,
  setFlag,
  error,
}) => {
  let [data] = useState(recipes);
  let [search, setSearch] = useState(curretSearch);
  let [currentPage, setCurrentPage] = useState(1);
  let [numPerPage] = useState(6);
  let [totalData] = useState(recipes.length);
  const indexOfLastPage = currentPage * numPerPage;
  const indexOfFirstPage = indexOfLastPage - numPerPage;
  const currentData = data.slice(indexOfFirstPage, indexOfLastPage);

  const handleSearch = async (event) => {
    event.preventDefault();
    searchRecipe(search);
    setFlag(false);
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleChooseRecipe = (idx) => {
    let chosenData = currentData[idx].recipe;
    setRecipe(chosenData);
    setStep(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderRecipes = currentData.map((recipe, index) => {
    return (
      <Col md={3} sm={4} className="mx-3 my-2" key={index}>
        <RecipesCard
          // disini sbenernya lu bsa ngirim recipe doang props nya, nah ntar label img sgala macem bsa dapet dr 1 props doang
          index={index}
          recipe={recipe.recipe} //buat passing props dr parent, props ini udh include smua data kan harusnya
          chooseRecipe={handleChooseRecipe}
        />
      </Col>
    );
  });

  return (
    <Wrapper>
      <div
        className={`wrapper-recipes ${
          flag === true || totalData === 0 ? "nodata-height" : ""
        }`}
      >
        <Container
          fluid
          className={`${
            totalData === 0
              ? "nodata-container-height d-flex flex-column justify-content-center"
              : ""
          }`}
        >
          <Form
            onSubmit={handleSearch}
            className={`${
              totalData === 0 ? "d-flex flex-column justify-content-center" : ""
            }`}
          >
            <FormGroup className="justify-content-center" row>
              <Col sm={6} xs={8}>
                <Input
                  type="text"
                  className="recipes-search-input"
                  placeholder="Enter Recipes Name Here"
                  value={search}
                  onChange={handleSearchInput}
                />
                <FormText
                  className={`${
                    totalData === 0 && flag === false && error === false
                      ? ""
                      : "d-none"
                  }`}
                >
                  No recipes found with that name, please enter a different
                  recipe name.
                </FormText>
                <FormText className={`${error === true ? "" : "d-none"}`}>
                  Connection error, please refresh and try again.
                </FormText>
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
