import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types/StackTypes/RootStackParamList";

const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return navigation.navigate;
};

export default useAppNavigation;
