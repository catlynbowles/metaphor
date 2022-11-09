import {useState} from "react";
import DropDown from "../../Components/DropDown/DropDown";
import GalleryView from "../GalleryView/GalleryView";

const HomeView = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  return (
    <main>
      <DropDown setSelectedDepartment={setSelectedDepartment}/>
      <GalleryView />
    </main>
  )
};

export default HomeView;
