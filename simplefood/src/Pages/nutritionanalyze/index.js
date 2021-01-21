import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "reactstrap";
import "./index.scss";
import { Navbar } from "../../Components";
import axios from "axios";

const NutriotionAnalyze = () => {
  let qtyInput = React.createRef();
  let unitInput = React.createRef();
  let foodInput = React.createRef();

  const [itemList, setList] = useState([]);
  const [nutrition, setNutrition] = useState([]);

  const API_ID = "06857527";
  const API_KEY = "7f0923e54e4824386bfb2a0909cd7875";

  const handle_add_data = () => {
    let input_value = {
      qty: qtyInput.current.value,
      unit: unitInput.current.value,
      food: foodInput.current.value,
    };
    var encode_str = encodeURIComponent(
      input_value.qty + " " + input_value.unit + " " + input_value.food
    );
    const req = `https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${encode_str}`;
    axios.get(req).then(function (response) {
      setNutrition(response.data);
      console.log(response);
    });

    setList((itemList) => [input_value]);
  };

  return (
    <React.Fragment>
      <Navbar currentPage="nutritionanalyze" />
      <Container>
        <div className="content mt-5">
          <div className="input-section">
            <div className="row">
              <div className="col-4">
                <p>qty</p>
                <input ref={qtyInput} name="qty" type="number" />
              </div>
              <div className="col-4">
                <p>unit</p>
                <input ref={unitInput} name="unit" type="text" />
              </div>
              <div className="col-4">
                <p>food</p>
                <input ref={foodInput} name="food" type="text" />
              </div>
            </div>
            <div className="row">
              <div className="mt-3">
                <Button
                  onClick={handle_add_data}
                  className="add_btn"
                  color="primary"
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>

          <div className="list-item-section mt-5">
            <div className="row">
              <div className="col-6">
                <Table>
                  <thead>
                    <tr>
                      <th>qty</th>
                      <th>Unit</th>
                      <th>Food</th>
                      <th>Calories</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemList.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{item.qty}</td>
                          <td>{item.unit}</td>
                          <td>{item.food}</td>
                          <td>{nutrition.calories}</td>
                          <td>{nutrition.totalWeight}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="col-6">
                <img
                  className="nutrition-img"
                  src={process.env.PUBLIC_URL + "/img/nutrition-table.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NutriotionAnalyze;
