import React from "react";
import * as M from "./model";
import HomeScreenView from "./view";
const HomeScreenController = () => {
  return <HomeScreenView navigate={M.NavigateToDetailsScreen} />;
};

export default HomeScreenController;
