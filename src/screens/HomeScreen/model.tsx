import { NavigationProp } from "@react-navigation/native";
import useAppNavigation from "../../hooks/useAppNavigation";
import { RootStackParamList } from "../../utils/types/StackTypes/RootStackParamList";

export const NavigateToDetailsScreen = (
  navigation: NavigationProp<RootStackParamList>
) => {
  navigation.navigate("Details");
};
