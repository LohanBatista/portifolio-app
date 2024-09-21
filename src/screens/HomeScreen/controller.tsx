import React from "react";
import * as M from "./model";
import HomeScreenView from "./view";
import useAppNavigation from "../../hooks/useAppNavigation";
const HomeScreenController = () => {
  const navigation = useAppNavigation();
  return (
    <HomeScreenView navigate={() => M.NavigateToDetailsScreen(navigation)} />
  );
};

export default HomeScreenController;
