import React, { useEffect, useState } from "react";
import { getMetData } from "../../Utilities/apiCalls";
import "./DropDown.scss";

const DropDown = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    getMetData().then((data) => setDepartments(data.departments));
  });

  const displayDepartments = () => {
    return departments.reduce((acc, element) => {
      console.log(element.displayName);
      acc.push(element.displayName);
      return acc;
    }, []);
  };

  return <select></select>;
};

export default DropDown;
