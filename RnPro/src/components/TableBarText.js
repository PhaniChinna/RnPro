import React from "react";

import { useTheme, themeColor, Text } from "react-native-rapi-ui";

export default function TabBarName(props) {
  return (
    <Text
      style={{
        marginBottom: 1,
        fontSize: 14,
        padding: 1,
      }}
    >
      {props.title}
    </Text>
  );
}
