import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getMetData } from "../../Utilities/apiCalls";
import DetailView from "../../Views/DetailView/DetailView";
import GalleryView from "../../Views/GalleryView/GalleryView";
import HomeView from "../../Views/HomeView/HomeView";

const Routes = () => {
  useEffect(() => {
    getMetData().then((data) => console.log(data));
  });
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/gallery-view">
        <GalleryView />
      </Route>
      <Route exact path="/detail-view">
        <DetailView />
      </Route>
    </Switch>
  );
};

export default Routes;
