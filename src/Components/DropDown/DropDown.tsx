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
