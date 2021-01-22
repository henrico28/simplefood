import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Table,
  Button,
  Spinner,
} from "reactstrap";
import { Navbar, Footer } from "../../Components";
import axios from "axios";
import CanvasJSReact from "../../lib/canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NutriotionAnalyze = (props) => {
  let qtyInput = React.createRef();
  let unitInput = React.createRef();
  let foodInput = React.createRef();

  let [loading, setLoading] = useState(false);
  let [list, setList] = useState([]);
  let [totalCalProtein, setTotalCalProtein] = useState([]);
  let [totalCalFat, setTotalCalFat] = useState([]);
  let [totalCalCarbo, setTotalCalCarbo] = useState([]);

  const API_ID = "06857527";
  const API_KEY = "7f0923e54e4824386bfb2a0909cd7875";

  const options = {
    title: {
      text: "Coba cuk",
    },
    data: [
      {
        type: "doughnut",
        dataPoints: [
          { label: "Protein", y: totalCalProtein.reduce((a, b) => a + b, 0) },
          { label: "Carbs", y: totalCalCarbo.reduce((a, b) => a + b, 0) },
          { label: "Fat", y: totalCalFat.reduce((a, b) => a + b, 0) },
        ],
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let ingridient = {
      qty: qtyInput.current.value,
      unit: unitInput.current.value,
      food: foodInput.current.value,
    };
    var encode_str = encodeURIComponent(
      ingridient.qty + " " + ingridient.unit + " " + ingridient.food
    );
    const req = `https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${encode_str}`;
    setLoading(true);
    const res = await axios.get(req);
    setList([...list, res.data]);

    setTotalCalProtein([
      ...totalCalProtein,
      res.data.totalNutrientsKCal.PROCNT_KCAL.quantity,
    ]);

    setTotalCalFat([
      ...totalCalFat,
      res.data.totalNutrientsKCal.FAT_KCAL.quantity,
    ]);

    setTotalCalCarbo([
      ...totalCalCarbo,
      res.data.totalNutrientsKCal.CHOCDF_KCAL.quantity,
    ]);

    setLoading(false);
  };

  const handleRemove = (indexToRemove) => {
    setList([...list.filter((_, index) => index !== indexToRemove)]);
    setTotalCalFat([
      ...totalCalFat.filter((_, index) => index !== indexToRemove),
    ]);
    setTotalCalCarbo([
      ...totalCalCarbo.filter((_, index) => index !== indexToRemove),
    ]);
    setTotalCalProtein([
      ...totalCalProtein.filter((_, index) => index !== indexToRemove),
    ]);
  };

  const renderTableContent = list.map((list, index) => {
    return (
      <tr key={index}>
        <td>{list.ingredients[0].parsed[0].quantity}</td>
        <td>{list.ingredients[0].parsed[0].measure}</td>
        <td>{list.ingredients[0].parsed[0].food}</td>
        <td>{list.calories}</td>
        <td>{list.totalWeight}</td>
        <td>
          <Button
            color="danger"
            onClick={() => {
              handleRemove(index);
            }}
          >
            X
          </Button>
        </td>
      </tr>
    );
  });

  if (loading) {
    return (
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
    );
  }

  return (
    <React.Fragment>
      <Navbar currentPage="nutritionanalyze" />
      <Container className="mt-4" style={{ minHeight: "600px" }} fluid>
        <div>
          <h1 className="text-center">Nutrition Analysis</h1>
        </div>
        <Form onSubmit={handleSubmit} className="text-center">
          <FormGroup className="justify-content-center" row>
            <Col>
              <Label>Quantity</Label>
              <input
                className="form-control"
                ref={qtyInput}
                type="number"
                min="1"
                placeholder="10"
              />
            </Col>
            <Col>
              <Label>Unit</Label>
              <input
                className="form-control"
                ref={unitInput}
                type="text"
                placeholder="oz"
              />
            </Col>
            <Col>
              <Label>Food</Label>
              <input
                className="form-control"
                ref={foodInput}
                type="text"
                placeholder="rice"
              />
            </Col>
            <Col md={2}>
              <Button className="mt-4" color="success">
                Add
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th>Food</th>
              <th>Calories</th>
              <th>Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableContent}</tbody>
        </Table>

        <Row className="align-items-center mt-5">
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Protein</th>
                  <th>Fat</th>
                  <th>Carbohydrates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{totalCalProtein.reduce((a, b) => a + b, 0)}</td>
                  <td>{totalCalFat.reduce((a, b) => a + b, 0)}</td>
                  <td>{totalCalCarbo.reduce((a, b) => a + b, 0)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <CanvasJSChart options={options} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default NutriotionAnalyze;
