import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
// import { ProgressBar } from "@react-native-community/progress-bar-android";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import data from "../DB/Data";
import Response from "../DB/Response";
import styles from "../styles/style";
import Answers from "../DB/Answers";
import { useNavigation } from "@react-navigation/native";

const Question = () => {
  const navigator = useNavigation();
  const [number, setNumber] = useState(0);
  const [checked, setChecked] = useState(0);
  const [answer, setAnswers] = useState([]);

  const changeQuestionFront = () => {
    if (number >= data.length - 1) return;
    setNumber((preState) => preState + 1);
    // console.log(number);
    // console.log(data[number]);
  };
  const changeQuestionBack = () => {
    if (number == 0) return;
    setNumber((preState) => preState - 1);
    // console.log(number);
    // console.log(data[number]);
  };

  const updateOption = (id, number) => {
    if (
      Response[number].chose != true ||
      (Response[number].chose == true && Response[number].selected === id)
    ) {
      Response[number][id] = !Response[number][id];
      Response[number].chose = !Response[number].chose;
      Response[number].selected = id;
      // console.log(answer);
      // console.log((Response[number].selected = id));
    } else
      Alert.alert(
        "Can't Perform This Action",
        "Choose Only One Option.Deselect The Current One And Select Different Option",
        [
          {
            text: "OK",
            onPress: () => {
              return;
            },
          },
        ]
      );
    setChecked((prevState) => prevState + 1);

    // console.log(typeof number);
  };

  const handleSubmit = () => {
    let count = 0;
    for (let i = 0; i < Response.length; i++) {
      if (Response[i].chose === true && Response[i].selected === Answers[i])
        count++;
    }
    console.log(count, "Answers are correct");
    navigator.navigate("End", { correct: count });
    return;
  };

  return (
    <View
      style={[
        {
          flex: 0.8,
          backgroundColor: "white",
          width: 300,
          borderRadius: 5,
        },
        createStyle.shadow,
      ]}
    >
      <View style={{ backgroundColor: "dodgerblue" }}>
        {/* <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        /> */}
      </View>
      <Text style={{ paddingTop: 15, marginLeft: 10, fontSize: 20 }}>
        {data[number].question}
      </Text>

      <View>
        {/* {
       findItem=data.find((item,index) =>index===number)
       } */}
        <View>
          <View style={createStyle.direction}>
            <CheckBox
              value={Response[number][1]}
              onValueChange={() => {
                // console.log(key);
                updateOption(1, number);
              }}
            />
            <Text style={createStyle.text}>{data[number][1]}</Text>
          </View>
          <View style={createStyle.direction}>
            <CheckBox
              value={Response[number][2]}
              onValueChange={() => {
                updateOption(2, number);
              }}
            />
            <Text style={createStyle.text}>{data[number][2]}</Text>
          </View>
          <View style={createStyle.direction}>
            <CheckBox
              value={Response[number][3]}
              onValueChange={() => {
                updateOption(3, number);
              }}
            />
            <Text style={createStyle.text}>{data[number][3]}</Text>
          </View>
          <View style={createStyle.direction}>
            <CheckBox
              value={Response[number][4]}
              onValueChange={() => {
                updateOption(4, number);
              }}
            />
            <Text style={createStyle.text}>{data[number][4]}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          width: 300,
          alignItems: "center",
        }}
      >
        <Pressable style={styles.button} onPress={changeQuestionFront}>
          <Text style={styles.text}>Next</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={changeQuestionBack}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const createStyle = StyleSheet.create({
  direction: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
  },
});

export default Question;
