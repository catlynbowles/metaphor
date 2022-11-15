import { useEffect, useState } from "react";
import { getMetData } from "../../Utilities/apiCalls";

type Prop = {
  selectedDepartment: { departmentId: number; displayName: string; }
}

// search?departmentId=6&hasImages=true

const GalleryView = ({ selectedDepartment }: Prop) => {
  const [artTiles, setArtTiles] = useState([])

  useEffect(() => {
    if (selectedDepartment.displayName) {
      getMetData(`search?departmentId=${selectedDepartment.departmentId}&q=${selectedDepartment.displayName}&hasImages=true`).then(data => setArtTiles(data.objectIDs.slice(0, 6)))
    }
  })

  return (
    <p>{selectedDepartment.displayName ? <p>{selectedDepartment.displayName}</p> : <p>no selection</p>}</p>
  )
}

export default GalleryView;

// a user selects the department via dropdown, the display will change based on current selection, 
// will also update this prop
// when they select a dept, gallery view shows up --- > this view! 
// the number ( selected dept) will be interpolated within the api call to adjust for the changes
// where to put the api call ? 

// once we get the details of the id, we need the primaryImageSmall for gallery view
