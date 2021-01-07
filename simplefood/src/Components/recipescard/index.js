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
import { Link } from "react-router-dom";

const RecipesCard = ({
  index,
  name,
  calories,
  image,
  chooseRecipe,
  recipe, //props yang dikirim dr parent
}) => {
  return (
    /* 
      - pake library Link dari router dom
      - kirim props lagi buat ke masing2 recipe detil
       @param: data
    */
    <Link to={{ pathname: `/recipedetail/${name}`, data: recipe }}>
      <Wrapper>
        <Card
          className="recipescard-wrapper"
          // onClick={() => {
          //   chooseRecipe(index);
          // }}
        >
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle className="text-center recipescard-name">
              {name}
            </CardTitle>
            <CardSubtitle className="text-center recipescard-calories-wrapper">
              <Badge className="recipescard-calories">{calories} kcal</Badge>
            </CardSubtitle>
          </CardBody>
        </Card>
      </Wrapper>
    </Link>
  );
};

export default RecipesCard;
