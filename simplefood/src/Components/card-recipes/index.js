import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipesCard = (props) => {
  return (
    <div className="mt-5">
      <Card>
        <CardImg top  src="https://ide.unpar.ac.id/pluginfile.php/113498/user/icon/snap/f1?rev=758417" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Manusia Berwanita Banyak</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Buaya Darat - Focused on Chinese Girl</CardSubtitle>
          <CardText>Be careful on what you're doin'. Cuz he's always watching you on the other side.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipesCard;
