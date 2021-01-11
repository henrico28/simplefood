import React from "react";
import { RecipeDetails } from "../../Containers";
import { Navbar, Footer } from "../../Components";

const RecipeDetailsPage = (props) => {
  return (
    <React.Fragment>
      <Navbar currentPage="recipes" />
      <RecipeDetails recipeDetail={props.location.data} />
      <Footer />
    </React.Fragment>
  );
};

export default RecipeDetailsPage;
