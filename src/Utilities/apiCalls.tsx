export const getMetData = async (departments: string) => {
  const data = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/${departments}`
  );
  const response = await data.json();
  return response;
};

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1


