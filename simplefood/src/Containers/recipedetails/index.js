import React from "react";
import { Container, Row, Col, Button, Badge } from "reactstrap";
import { Wrapper } from "./style";

const RecipeDetails = ({ setStep, recipe }) => {
  let recipeLabels = "";
  let flag = true;
  recipe.dietLabels.map((diet) => {
    if (flag) {
      recipeLabels += diet;
      flag = false;
    } else {
      recipeLabels += ", " + diet;
    }
  });
  recipe.healthLabels.map((health) => {
    if (flag) {
      recipeLabels += health;
      flag = false;
    } else {
      recipeLabels += ", " + health;
    }
  });

  return (
    <Wrapper>
      <div className="recipedetails-wrapper">
        <Container fluid>
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-center" md={5} sm={12}>
              <img src={recipe.image} alt={recipe.label} className="shadow" />
            </Col>
            <Col
              md={7}
              sm={12}
              className="d-flex flex-column justify-content-center"
            >
              <Row className="my-2 justify-content-center justify-content-md-start">
                <h1 className="recipedetails-name">{recipe.label}</h1>
              </Row>
              <Row className="my-1 justify-content-center justify-content-md-start">
                <Badge className="recipedetails-calories">
                  {Number(recipe.calories).toFixed(2)} kcal
                </Badge>
              </Row>
              <Row className="mt-3 mb-2 justify-content-center justify-content-md-start">
                <h3 className="recipedetails-labels text-muted">
                  {recipeLabels}
                </h3>
              </Row>
              <Row className="my-2 justify-content-center justify-content-md-start ">
                <h3 className="recipedetails-source">
                  (source:{" "}
                  <a href={recipe.url} rel="noreferrer" target="_blank">
                    {recipe.url}
                  </a>
                  )
                </h3>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-4">
            <Col md={10} className="mx-2 recipedetails-card">
              <h1 className="recipedetails-card-title text-center my-2">
                Ingridients
              </h1>
              <ul>
                {recipe.ingredientLines.map((ingridient, index) => {
                  return (
                    <li key={index} className="recipedetails-card-text">
                      {ingridient}
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} className="mx-2 recipedetails-card">
              <h1 className="recipedetails-card-title text-center my-2">
                Nutrients
              </h1>
              <Row className="justify-content-center">
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe.totalNutrients).map((key, index) => {
                      if (index < 16) {
                        return (
                          <li className="recipedetails-card-text">
                            {recipe.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe.totalNutrients).map((key, index) => {
                      if (index >= 16) {
                        return (
                          <li className="recipedetails-card-text">
                            {recipe.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center my-3">
            <Button
              className="recipesdetails-button"
              onClick={() => {
                setStep(0);
              }}
            >
              &lt; Back
            </Button>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default RecipeDetails;
