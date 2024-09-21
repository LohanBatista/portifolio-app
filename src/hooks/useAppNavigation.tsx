import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types/StackTypes/RootStackParamList";

const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};

export default useAppNavigation;
