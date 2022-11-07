import React, { useEffect } from "react";
import { getMetData } from "../../Utilities/apiCalls";

const Routes = () => {
  useEffect(() => {
    getMetData().then((data) => console.log(data));
  });
  return <p>Routes</p>;
};

export default Routes;
