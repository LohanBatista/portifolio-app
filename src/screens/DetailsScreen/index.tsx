import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const DetailsScreen = () => {
  return (
    <Container>
      <Title>Details Screen</Title>
    </Container>
  );
};

export default DetailsScreen;
