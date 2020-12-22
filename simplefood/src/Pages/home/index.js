import React, { useState } from "react";
import { Navbar } from "../../Components";
import { Recipes, RecipeDetails } from "../../Containers";

const Home = () => {
  let [step, setStep] = useState(0);
  let [recipe, setRecipe] = useState();

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Recipes setStep={setStep} setRecipe={setRecipe} />;
      case 1:
        return <RecipeDetails setStep={setStep} recipe={recipe} />;
      default:
        console.log(step);
        return <h1>Web Error</h1>;
    }
  };

  return (
    <React.Fragment>
      <Navbar currentPage="recipes" />
      {renderContent()}
    </React.Fragment>
  );
};

export default Home;
