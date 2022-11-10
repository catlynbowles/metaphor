import {useState} from "react";
import DropDown from "../../Components/DropDown/DropDown";
import GalleryView from "../GalleryView/GalleryView";

const HomeView = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  return (
    <main>
      <DropDown setSelectedDepartment={setSelectedDepartment}/>
      <GalleryView selectedDepartment={selectedDepartment}/>
    </main>
  )
};

export default HomeView;
