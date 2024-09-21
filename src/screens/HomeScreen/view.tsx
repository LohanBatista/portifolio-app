import React from "react";
import * as S from "./styles";
import { HomeScreenProps } from "@utils/types/Screens/HomeScreen";

const HomeScreenView = (props: HomeScreenProps) => {
  return (
    <S.Container>
      <S.Title>Welcome to the Home Screen!</S.Title>
      <S.Button title="Go to Details" onPress={() => props.navigate()} />
    </S.Container>
  );
};

export default HomeScreenView;
