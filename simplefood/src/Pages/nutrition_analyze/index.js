import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "reactstrap";
import "./index.scss";

const Index = () => {
  let qtyInput = React.createRef();
  let unitInput = React.createRef();
  let foodInput = React.createRef();

  const [itemList, setList] = useState([]);

  const handle_add_data = () => {
    let input_value = {
      qty: qtyInput.current.value,
      unit: unitInput.current.value,
      food: foodInput.current.value,
    };
    setList((itemList) => [...itemList, input_value]);
  };

  return (
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
              <input ref={unitInput} name="unit" type="number" />
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
                  </tr>
                </thead>
                <tbody>
                  {itemList.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item.qty}</td>
                        <td>{item.unit}</td>
                        <td>{item.food}</td>
                        <td>0</td>
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
  );
};

export default Index;
