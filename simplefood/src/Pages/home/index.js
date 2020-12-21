import React, { useState } from "react";
import { Navbar } from "../../Components";
import { Recipes } from "../../Containers";

const Home = () => {
  let [step, setStep] = useState();
  return (
    <React.Fragment>
      <Navbar currentPage="recipes" />
      <Recipes />
    </React.Fragment>
  );
};

export default Home;
