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

const RecipesCard = (props) => {
  return (
    <Wrapper>
      <Card className="recipescard-wrapper">
        <CardImg top src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle className="text-center recipescard-name">
            {props.name}
          </CardTitle>
          <CardSubtitle className="text-center recipescard-calories-wrapper">
            <Badge className="recipescard-calories">{props.calories} cal</Badge>
          </CardSubtitle>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default RecipesCard;
