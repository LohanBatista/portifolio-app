// auto-generate-structure.js
const fs = require("fs");
const path = require("path");

// Helper function to create directories
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
}

// Helper function to create files with boilerplate code
function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
}

// Boilerplate code for the screen or component
const controllerTemplate = `import React from 'react';
import * as M from './model';
import ViewComponent from './view';
import useAppNavigation from '@hooks/useAppNavigation';

const Controller = () => {
  const navigation = useAppNavigation();
  return (
    <ViewComponent navigate={() => M.NavigateToDetailsScreen(navigation)} />
  );
};

export default Controller;
`;

const viewTemplate = `import React from "react";
import * as S from "./styles";

const ViewComponent = (props) => {
  return (
    <S.Container>
      <S.Title>Welcome to the Component!</S.Title>
      <S.Button title="Go to Details" onPress={() => props.navigate()} />
    </S.Container>
  );
};

export default ViewComponent;
`;

const modelTemplate = `import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@utils/types/StackTypes/RootStackParamList";

export const NavigateToDetailsScreen = (
  navigation: NavigationProp<RootStackParamList>
) => {
  navigation.navigate("Details");
};
`;

const stylesTemplate = `import styled from 'styled-components/native';

export const Container = styled.View\`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
\`;

export const Title = styled.Text\`
  font-size: 24px;
  font-weight: bold;
  color: #343a40;
\`;

export const Button = styled.Button\`\`;
`;

const indexTemplate = `import Controller from './controller';

export default Controller;
`;

// Function to generate architecture (controller, view, model, styles, and index)
function generateArchitecture(baseDir) {
  createFile(path.join(baseDir, "controller.tsx"), controllerTemplate);
  createFile(path.join(baseDir, "view.tsx"), viewTemplate);
  createFile(path.join(baseDir, "model.tsx"), modelTemplate);
  createFile(path.join(baseDir, "styles.ts"), stylesTemplate);
  createFile(path.join(baseDir, "index.tsx"), indexTemplate);
}

// Function to generate screens
function createScreen(screenName) {
  const screenDir = path.join(__dirname, "../src/screens", screenName);
  createDir(screenDir);
  generateArchitecture(screenDir);
}

// Function to generate components (unit or composed)
function createComponent(componentName, type = "unit") {
  const componentDir = path.join(
    __dirname,
    "../src/components",
    type,
    componentName
  );
  createDir(componentDir);
  generateArchitecture(componentDir); // Generate full architecture for components as well
}

// Main function to create everything
function main() {
  const args = process.argv.slice(2);
  const name = args[0];
  const type = args[1];

  if (!name) {
    console.error("Please provide a name.");
    return;
  }

  if (type === "screen") {
    createScreen(name);
  } else if (type === "unit" || type === "composed") {
    createComponent(name, type);
  } else {
    console.error("Please specify a valid type: screen, unit, or composed.");
  }
}

// Execute the script
main();
