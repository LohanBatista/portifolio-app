import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@utils/types/StackTypes/RootStackParamList";

export const NavigateToDetailsScreen = (
  navigation: NavigationProp<RootStackParamList>
) => {
  navigation.navigate("Details");
};
