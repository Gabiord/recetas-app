import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, error, onChange, isSecure, placeholder }) => {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputName}>{label}</Text>
      <TextInput
        style={styles.inputForm}
        placeholder={placeholder}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error? <Text style={styles.error}>{error}</Text>: null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 25,
  },
  inputName: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    marginBottom: 10,
  },
  inputForm: {
    borderColor: colors.gray3,
    borderWidth: 1.5,
    width: 315,
    height: 55,
    borderRadius: 10,
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    paddingLeft: 25,
  },
});
