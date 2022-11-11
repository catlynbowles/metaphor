import {useState} from "react";
import DropDown from "../../Components/DropDown/DropDown";
import GalleryView from "../GalleryView/GalleryView";

const HomeView = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({departmentId: 0, displayName: ''});

  return (
    <main>
      <DropDown setSelectedDepartment={setSelectedDepartment}/>
      <GalleryView selectedDepartment={selectedDepartment}/>
    </main>
  )
};

export default HomeView;
