export const getMetData = async (deptName: string) => {
  const data = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/${deptName}`
  );
  const response = await data.json();
  return response;
};

// https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&hasImages=true
// https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]



