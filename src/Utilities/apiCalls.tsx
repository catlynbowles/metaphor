export const getMetData = async (deptName: string) => {
  const data = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/${deptName}`
  );
  const response = await data.json();
  return response;
};

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1
// getMetData(objects?departmentIds=1)

