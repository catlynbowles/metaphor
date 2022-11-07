import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getMetData } from "../../Utilities/apiCalls";
import AboutView from "../../Views/AboutView/AboutView";
import DetailView from "../../Views/DetailView/DetailView";
import GalleryView from "../../Views/GalleryView/GalleryView";
import HomeView from "../../Views/HomeView/HomeView";
import PGalleryView from "../../Views/PGalleryView/PGalleryView";

const Routes = () => {
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
      <Route exact path="/personal-gallery">
        <PGalleryView />
      </Route>
      <Route exact path="/about">
        <AboutView />
      </Route>
    </Switch>
  );
};

export default Routes;
