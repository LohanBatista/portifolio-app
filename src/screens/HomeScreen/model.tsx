import useAppNavigation from "../../hooks/useAppNavigation";

const navigation = useAppNavigation();

export const NavigateToDetailsScreen = () => {
  navigation("Details");
};
