import React from "react";

import { View, StyleSheet, Linking } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  Button,
  useTheme,
} from "react-native-rapi-ui";

export default function FirstScreen({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View style={style.bgcontaibner}>
        <Section>
          <SectionContent>
            <Text>Hello FirstScree</Text>
            <Button
              text="Rapi UI"
              style={{
                marginTop: 10,
              }}
              status="info"
              onPress={() => {
                Linking.openURL(
                  "https://reactnavigation.org/docs/bottom-tab-navigator/"
                );
              }}
            />
            <Button
              text="Go Profile"
              status="primary"
              style={{
                marginTop: 10,
              }}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "danger"}
              style={{
                marginTop: 10,
              }}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const style = StyleSheet.create({
  bgcontaibner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
