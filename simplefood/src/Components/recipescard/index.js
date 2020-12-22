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

const RecipesCard = ({ index, name, calories, image, chooseRecipe }) => {
  return (
    <Wrapper>
      <Card
        className="recipescard-wrapper"
        onClick={() => {
          chooseRecipe(index);
        }}
      >
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardTitle className="text-center recipescard-name">{name}</CardTitle>
          <CardSubtitle className="text-center recipescard-calories-wrapper">
            <Badge className="recipescard-calories">{calories} cal</Badge>
          </CardSubtitle>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default RecipesCard;
