import React, { useState, useEffect } from "react";
import { Container, Spinner, Row } from "reactstrap";
import { Footer, Navbar } from "../../Components";
import { Recipes, RecipeDetails } from "../../Containers";
import axios from "axios";
import { Wrapper } from "./style";

const Home = () => {
  let [step, setStep] = useState(0);
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  let [loading, setLoading] = useState();
  let [recipe, setRecipe] = useState();
  let [flag, setFlag] = useState(true);
  let [error, setError] = useState(false);

  const API_ID = "95ce69a6";
  const API_KEY = "b0161b6ae0d6217f731a94d8b97be6ea";
  const req = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let fetchError = false;
      const res = await axios.get(req).catch((err) => {
        // console.log(err);
        // console.log(err.status);
        // console.log(err.code);
        // console.log(err.message);
        // console.log(err.stack);
        console.log(err.message);
        setError(true);
        fetchError = true;
        setData([]);
      });
      if (!fetchError) {
        setData(res.data.hits);
      }
      setLoading(false);
    };
    fetchData();
  }, [req]);

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <Recipes
            setStep={setStep}
            recipes={data}
            curretSearch={search}
            searchRecipe={setSearch}
            setRecipe={setRecipe}
            flag={flag}
            setFlag={setFlag}
            error={error}
          />
        );
      case 1:
        return <RecipeDetails setStep={setStep} recipe={recipe} />;
      default:
        console.log(step);
        return <h1>Web Error</h1>;
    }
  };

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
    <React.Fragment>
      <Navbar currentPage="recipes" />
      {/* <Recipes
        
        setStep={setStep}
        recipes={data}
        curretSearch={search}
        searchRecipe={setSearch}
        setRecipe={setRecipe}
      /> */}
      {renderContent()}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
