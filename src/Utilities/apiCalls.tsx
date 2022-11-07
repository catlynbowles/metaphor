export const getMetData = async () => {
  const data = await fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/departments"
  );
  const response = await data.json();
  return response;
};
