import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../Components";
import {CompareRecipe} from "../../Containers"


const Compare = (props) => {
  return (
    <React.Fragment>
      <Navbar currentPage="compare"/>
      <CompareRecipe/>
      <Footer/>
    </React.Fragment>
  );
};

export default Compare;
