import React, { useEffect, useState } from "react";
import { getMetData } from "../../Utilities/apiCalls";
import "./DropDown.scss";

type Prop = {
  setSelectedDepartment: any
}
// ^^ this needs a better type!

const DropDown = ({setSelectedDepartment}: Prop) => {
  const [departments, setDepartments] = useState<any[]>([]);

  useEffect(() => {
    getMetData('departments').then((data) => setDepartments(data.departments));
  });

  const submitSelectedDepartment = (id: string) => {
    console.log(typeof id)
    console.log(departments)
    let matchedLocation = departments.find((dept: { departmentId: number; displayName: string }) => dept.departmentId === parseInt(id))
    let deptInfo = {
      departmentId: id,
      displayName: matchedLocation?.displayName
    }
    setSelectedDepartment(deptInfo)
  }

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
    <select onChange={(e) => submitSelectedDepartment(e.target.value)}>
      <option>Choose a Department:</option>
      {displayDepartments()}
    </select>
  );
};
export default DropDown;
