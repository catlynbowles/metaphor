import React, { useEffect, useState } from "react";
import { getMetData } from "../../Utilities/apiCalls";
import "./DropDown.scss";

type Prop = {
  setSelectedDepartment: any
}
// ^^ this needs a better type!

const DropDown = ({setSelectedDepartment}: Prop) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getMetData('departments').then((data) => setDepartments(data.departments));
  });

  const displayDepartments = () => {
    return departments.map(
      (department: { departmentId: number; displayName: string }) => {
        return (
          <option value={department.departmentId}>
            {department.displayName}
          </option>
        );
      }
    );
  };

  return (
    <select onChange={(e) => setSelectedDepartment(e.target.value)}>
      <option>Choose a Department:</option>
      {displayDepartments()}
    </select>
  );
};
export default DropDown;
