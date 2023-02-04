import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import pattern from "../assets/pattern1.jpg";

import { button1 } from "../styles/button";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <Text style={button1} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
        <Text style={button1} onPress={() => navigation.navigate("Signup")}>
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  head: {
    fontSize: 30,
    color: "#fff",
  },
  container1: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: "20%",
    resizeMode: "contain",
    marginBottom: 50,
  },
});
