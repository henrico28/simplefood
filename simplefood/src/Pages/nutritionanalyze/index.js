import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormText,
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
import { Wrapper } from "./style";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NutriotionAnalyze = (props) => {
  let qtyInput = React.createRef();
  let unitInput = React.createRef();
  let foodInput = React.createRef();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [list, setList] = useState([]);
  let [totalCalProtein, setTotalCalProtein] = useState([]);
  let [totalCalFat, setTotalCalFat] = useState([]);
  let [totalCalCarbo, setTotalCalCarbo] = useState([]);

  const API_ID = "06857527";
  const API_KEY = "7f0923e54e4824386bfb2a0909cd7875";

  const options = {
    title: {
      text: "Energy",
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
    setError(false);
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
    if (res.data.calories !== 0) {
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
    } else {
      setError(true);
    }
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
        <td>{Number(list.calories).toFixed(2)}</td>
        <td>{Number(list.totalWeight).toFixed(2)}</td>
        <td className="text-center">
          <Button
            color="danger"
            onClick={() => {
              handleRemove(index);
            }}
          >
            x
          </Button>
        </td>
      </tr>
    );
  });

  if (loading) {
    return (
      <Wrapper>
        <div className="wrapper-nutrition-analyze-loading">
          <Container
            className="min-vh-100 d-flex flex-column justify-content-center"
            fluid
          >
            <Row className="d-flex justify-content-center">
              <Spinner className="nutrition-analyze-spinner" />
            </Row>
          </Container>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Navbar currentPage="nutritionanalyze" />
      <div className="wrapper-nutrition-analyze">
        <Container className="mt-4" fluid>
          <div>
            <h1 className="text-center nutrition-analyze-title">
              Nutrition Analysis
            </h1>
          </div>
          <Form
            onSubmit={handleSubmit}
            className="text-center wrapper-nutrition-analyze-form"
          >
            <FormGroup className="justify-content-center" row>
              <Col md={2}>
                <Label className="nutrition-analyze-label">Quantity</Label>
                <input
                  className="form-control nutrition-analyze-input"
                  ref={qtyInput}
                  type="number"
                  min="1"
                  placeholder="Example : 10"
                />
              </Col>
              <Col md={2}>
                <Label className="nutrition-analyze-label">Unit</Label>
                <input
                  className="form-control nutrition-analyze-input"
                  ref={unitInput}
                  type="text"
                  placeholder="Example : oz"
                />
              </Col>
              <Col md={2}>
                <Label className="nutrition-analyze-label">Food</Label>
                <input
                  className="form-control nutrition-analyze-input"
                  ref={foodInput}
                  type="text"
                  placeholder="Example : rice"
                />
              </Col>
              <Col md={1}>
                <Button className="nutrition-analyze-button">Add</Button>
              </Col>
            </FormGroup>
          </Form>
          <FormText className={`text-center ${error === true ? "" : "d-none"}`}>
            No food found with that name, please try again
          </FormText>
          <Row
            className={`justify-content-center wrapper-nutrients-table ${
              list.length === 0 ? "d-none" : ""
            }`}
          >
            <Col md={8}>
              <Table bordered>
                <thead>
                  <tr>
                    <th className="text-center">Qty</th>
                    <th className="text-center">Unit</th>
                    <th className="text-center">Food</th>
                    <th className="text-center">Calories</th>
                    <th className="text-center">Weight</th>
                    <th className="text-center" width="2px">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{renderTableContent}</tbody>
              </Table>
            </Col>
          </Row>

          <Row
            className={`align-items-center wrapper-energy ${
              list.length === 0 ? "d-none" : ""
            }`}
          >
            <Col className="justify-content-center d-flex" xs={12} md={6}>
              <Table className="w-50 table-sm">
                <tr>
                  <th colSpan="2" className="text-center">
                    Energy
                  </th>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>{totalCalProtein.reduce((a, b) => a + b, 0)}</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>{totalCalFat.reduce((a, b) => a + b, 0)}</td>
                </tr>
                <tr>
                  <th>Carbohydrates</th>
                  <td>{totalCalCarbo.reduce((a, b) => a + b, 0)}</td>
                </tr>
              </Table>
            </Col>
            <Col xs={12} md={6}>
              <CanvasJSChart options={options} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default NutriotionAnalyze;
