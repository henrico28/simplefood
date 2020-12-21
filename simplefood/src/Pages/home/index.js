import React from "react";
import { Navbar } from "../../Components";
import { Recipes } from "../../Containers";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Recipes />
    </React.Fragment>
  );
};

export default Home;
