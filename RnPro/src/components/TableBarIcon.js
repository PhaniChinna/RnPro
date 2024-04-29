import React from "react";
import { useTheme, themeColor } from "react-native-rapi-ui";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TabBatIon(props) {
  const { isDarkMod } = useTheme();
  return (
    <FontAwesome5
      name={props.icon}
      color={
        props.focused
          ? isDarkMod
            ? themeColor.white100
            : primary
          : "rgb(143 , 155 , 179)"
      }
      size={22}
      style={{
        marginBottom: -9,
      }}
    />
  );
}
