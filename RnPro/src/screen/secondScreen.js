import React from "react";

import { View, StyleSheet } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  Button,
} from "react-native-rapi-ui";

export default function SecondScreen({ navigation }) {
  return (
    <Layout>
      <View style={style.bgcontaibner}>
        <Section>
          <SectionContent>
            <Text>Hello SecondScreen</Text>
            <Button
              text="FirstScreen"
              onPress={() => navigation.navigate("Home")}
              style={{
                marginTop: 20,
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
