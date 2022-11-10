import React from "react";

type Prop = {
  selectedDepartment: string
}

const GalleryView = ({selectedDepartment}: Prop) => {
    return (
        <p>{selectedDepartment}</p>
    )
}




export default GalleryView;
