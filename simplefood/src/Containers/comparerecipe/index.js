import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Row,
  Col,
  Button,
  Spinner,
  Progress,
} from "reactstrap";
import { RecipesCard } from "../../Components";
import axios from "axios";
import { Wrapper } from "./style";

const CompareRecipe = (props) => {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);
  let [query1, setQuery1] = useState("");
  let [query2, setQuery2] = useState("");
  let [step1, setStep1] = useState(0);
  let [step2, setStep2] = useState(0);
  let [recipe1, setRecipe1] = useState();
  let [recipe2, setRecipe2] = useState();
  let [loading, setLoading] = useState(false);
  let [flag1, setFlag1] = useState(false);
  let [flag2, setFlag2] = useState(false);

  const API_ID = "95ce69a6";
  const API_KEY = "b0161b6ae0d6217f731a94d8b97be6ea";
  const req1 = `https://api.edamam.com/search?q=${query1}&app_id=${API_ID}&app_key=${API_KEY}`;
  const req2 = `https://api.edamam.com/search?q=${query2}&app_id=${API_ID}&app_key=${API_KEY}`;

  const handleSearch1 = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await axios.get(req1);
    setData1(res.data.hits);
    setFlag1(true);
    setStep1(0);
    setLoading(false);
  };

  const handleSearch2 = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await axios.get(req2);
    setData2(res.data.hits);
    setFlag2(true);
    setStep2(0);
    setLoading(false);
  };

  const handleQuery1 = (event) => {
    setQuery1(event.target.value);
  };

  const handleQuery2 = (event) => {
    setQuery2(event.target.value);
  };

  const handleChooseRecipe1 = (index) => {
    let data = data1[index].recipe;
    setRecipe1(data);
    setStep1(1);
  };

  const handleChooseRecipe2 = (index) => {
    let data = data2[index].recipe;
    setRecipe2(data);
    setStep2(1);
  };

  let recipeLabels = "";
  let flag = true;
  if (recipe1) {
    recipe1.healthLabels.map((health) => {
      if (flag) {
        recipeLabels += health;
        flag = false;
      } else {
        recipeLabels += ", " + health;
      }
    });
  }

  let recipeLabels2 = "";
  let flagscnd = true;
  if (recipe2) {
    recipe2.healthLabels.map((health) => {
      if (flagscnd) {
        recipeLabels2 += health;
        flagscnd = false;
      } else {
        recipeLabels2 += ", " + health;
      }
    });
  }

  const renderComponent1 = () => {
    switch (step1) {
      case 0:
        return (
          <>
            {data1.map((recipe, index) => {
              return (
                <Col md={4} key={index} className="px-3">
                  <RecipesCard
                    index={index}
                    recipe={recipe.recipe}
                    chooseRecipe={handleChooseRecipe1}
                  />
                </Col>
              );
            })}
          </>
        );
      case 1:
        return (
          <Wrapper className="w-100" style={{ overflowX: "hidden" }}>
            <div className="recipedetails-wrapper text-center mb-4">
              <h1 className="my-3 recipedetails-name">{recipe1.label}</h1>
              <p className="ml-1 text-white badge badge-success">
                {recipeLabels}
              </p>
              <p className="mb-0 mt-3 recipedetails-name">Daily :</p>
              <h3
                className={
                  `${
                    Number(recipe1.calories) > 2250
                      ? "text-danger"
                      : "text-success"
                  }` + " font-weight-bold"
                }
              >
                {Number(recipe1.calories).toFixed()} / 2250{" "}
                <small className="recipedetails-name">cal</small>
              </h3>
              <div className="px-5">
                <Progress
                  color={`${
                    Number(recipe1.calories).toFixed(2) < 2250
                      ? "success"
                      : "danger"
                  }`}
                  value={Number(recipe1.calories) / 22.5}
                />
              </div>
            </div>
            <div className="border m-2 recipedetails-wrapper">
              <h5 className="recipedetails-card-text text-center mt-3 mb-3">
                Nutrients
              </h5>
              <Row className="justify-content-center">
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe1.totalNutrients).map((key, index) => {
                      if (index < 16) {
                        return (
                          <li className="recipedetails-card-text recipedetails-name">
                            {recipe1.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe1.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe1.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe1.totalNutrients).map((key, index) => {
                      if (index >= 16) {
                        return (
                          <li className="recipedetails-card-text recipedetails-name">
                            {recipe1.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe1.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe1.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
              </Row>
            </div>
            <Row className="recipedetails-wrapper justify-content-center my-3">
              <Button
                className="recipesdetails-button"
                onClick={() => {
                  setStep1(0);
                }}
              >
                &lt; Back
              </Button>
            </Row>
          </Wrapper>
        );
        break;
      default:
        console.log(step1);
        return <h1>Web Error</h1>;
    }
  };

  const renderComponent2 = () => {
    switch (step2) {
      case 0:
        return (
          <>
            {data2.map((recipe, index) => {
              return (
                <Col md={4} key={index} className="px-3">
                  <RecipesCard
                    index={index}
                    recipe={recipe.recipe}
                    chooseRecipe={handleChooseRecipe2}
                  />
                </Col>
              );
            })}
          </>
        );
      case 1:
        return (
          <Wrapper className="w-100">
            <div className="recipedetails-wrapper text-center mb-4">
              <h1 className="my-3 recipedetails-name">{recipe2.label}</h1>
              <p className="ml-1 text-white badge badge-success">
                {recipeLabels2}
              </p>
              <p className="mb-0 mt-3 recipedetails-name">Daily :</p>
              <h3
                className={
                  `${
                    Number(recipe2.calories) > 2250
                      ? "text-danger"
                      : "text-success"
                  }` + " font-weight-bold"
                }
              >
                {Number(recipe2.calories).toFixed()} / 2250{" "}
                <small className="recipedetails-name">cal</small>
              </h3>
              <div className="px-5">
                <Progress
                  color={`${
                    Number(recipe2.calories).toFixed(2) < 2250
                      ? "success"
                      : "danger"
                  }`}
                  value={Number(recipe2.calories) / 22.5}
                />
              </div>
            </div>
            <div className="border m-2 recipedetails-wrapper">
              <h5 className="recipedetails-card-text text-center mt-4 mb-3">
                Nutrients
              </h5>
              <Row className="justify-content-center">
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe2.totalNutrients).map((key, index) => {
                      if (index < 16) {
                        return (
                          <li className="recipedetails-card-text recipedetails-name">
                            {recipe2.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe2.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe2.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul>
                    {Object.keys(recipe2.totalNutrients).map((key, index) => {
                      if (index >= 16) {
                        return (
                          <li className="recipedetails-card-text recipedetails-name">
                            {recipe2.totalNutrients[key].label}:{" "}
                            {Number(
                              recipe2.totalNutrients[key].quantity
                            ).toFixed(2)}{" "}
                            {recipe2.totalNutrients[key].unit}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </Col>
              </Row>
            </div>
            <Row className="recipedetails-wrapper justify-content-center my-3">
              <Button
                className="recipesdetails-button"
                onClick={() => {
                  setStep2(0);
                }}
              >
                &lt; Back
              </Button>
            </Row>
          </Wrapper>
        );
        break;
      default:
        console.log(step1);
        return <h1>Web Error</h1>;
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <div className="wrapper-compare-loading">
          <Container
            className="min-vh-100 d-flex flex-column justify-content-center"
            fluid
          >
            <Row className="d-flex justify-content-center">
              <Spinner className="compare-spinner" />
            </Row>
          </Container>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div
        className={`${
          flag1 === false || flag2 === false ? "nodata-height" : ""
        }`}
      >
        <h1 className="text-center mt-3 compare-title">Compare Recipe</h1>
        <Container fluid className="mt-5">
          <Row className="justify-content-center">
            <Col md={6} className="border-right">
              <Form onSubmit={handleSearch1}>
                <FormGroup className="justify-content-center" row>
                  <Col md={10}>
                    <Input
                      value={query1}
                      onChange={handleQuery1}
                      placeholder="Enter Recipe Name Here"
                    />
                    <FormText
                      className={`${
                        data1.length === 0 && flag1 === true ? "" : "d-none"
                      }`}
                    >
                      No recipes found with that name, please enter a different
                      recipe name.
                    </FormText>
                  </Col>
                  <Col md={2} className="recipedetails-wrapper">
                    <Button className="recipesdetails-button">Search</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Row className="justify-content-center">{renderComponent1()}</Row>
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSearch2}>
                <FormGroup className="justify-content-center" row>
                  <Col md={10}>
                    <Input
                      value={query2}
                      onChange={handleQuery2}
                      placeholder="Enter Recipe Name Here"
                    />
                    <FormText
                      className={`${
                        data2.length === 0 && flag2 === true ? "" : "d-none"
                      }`}
                    >
                      No recipes found with that name, please enter a different
                      recipe name.
                    </FormText>
                  </Col>
                  <Col md={2} className="recipedetails-wrapper">
                    <Button className="recipesdetails-button">Search</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Row className="justify-content-center">{renderComponent2()}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default CompareRecipe;
