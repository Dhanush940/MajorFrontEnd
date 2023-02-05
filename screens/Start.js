import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/style";
import Question from "../components/Question";
const Start = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fc77a6",
      }}
    >
      <Question></Question>
    </SafeAreaView>
  );
};

export default Start;
// #FFB0CC
