import React from "react";

import { ThemeProvider } from "react-native-rapi-ui";

import AppNavigation from "./src/navigator/appNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}
