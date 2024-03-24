import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";

const SubmitButton = ({title, onSubmit}) => {
  return (
    <TouchableOpacity style={styles.btnContainerStyle} onPress={onSubmit}>
      <Text style={styles.btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: colors.primary100,
    width: 243,
    height: 54,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 30,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontWeight: "bold",
  },
});
