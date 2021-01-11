import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "reactstrap";
import { Wrapper } from "./style";

const RecipesCard = ({
  index,
  chooseRecipe,
  recipe, //props yang dikirim dr parent
}) => {
  return (
    /* 
      - pake library Link dari router dom
      - kirim props lagi buat ke masing2 recipe detil
      @param: data
    */
    <Wrapper>
      {/* <Link
        style={{ textDecoration: "none" }}
        to={{ pathname: `/recipedetail/${name}`, data: recipe }}
      > */}
      <Card
        className="recipescard-wrapper"
        onClick={() => {
          chooseRecipe(index);
        }}
      >
        <CardImg top src={recipe.image} alt={recipe.label} />
        <CardBody>
          <CardTitle className="text-center recipescard-name">
            {recipe.label}
          </CardTitle>
          <CardSubtitle className="text-center recipescard-calories-wrapper">
            <Badge className="recipescard-calories">
              {Number(recipe.calories).toFixed(2)} kcal
            </Badge>
          </CardSubtitle>
        </CardBody>
      </Card>
      {/* </Link> */}
    </Wrapper>
  );
};

export default RecipesCard;
