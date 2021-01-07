import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import { RecipesCard, RecipePagination } from "../../Components";
import { Wrapper } from "./style";

const Recipes = ({
  setStep,
  recipes,
  curretSearch,
  searchRecipe,
  setRecipe,
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
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleChooseRecipe = (idx) => {
    let chosenData = data[idx].recipe;
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
          // index={index}
          name={recipe.recipe.label}
          calories={Number(recipe.recipe.calories).toFixed(2)}
          image={recipe.recipe.image}
          recipe={recipe.recipe} //buat passing props dr parent, props ini udh include smua data kan harusnya
          chooseRecipe={handleChooseRecipe}
        />
      </Col>
    );
  });

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
