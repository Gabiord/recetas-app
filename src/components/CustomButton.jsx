import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";

const CustomButton = ({ title, onPress, focused, height, width }) => {
  return (
    <TouchableOpacity
      style={
        focused
          ? {...styles.focusedContainerStyle, height, width}
          : {...styles.containerStyle, height, width}
      }
      onPress={onPress}
    >
      <Text style={focused ? styles.focusedTextStyle : styles.TextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  focusedContainerStyle: {
    backgroundColor: colors.primary100,
    borderRadius: 5,
    justifyContent: "center",
  },
  containerStyle: {
    borderRadius: 5,
    justifyContent: "center",
  },
  focusedTextStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontWeight: "bold",
  },
  TextStyle: {
    color: colors.primary100,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontWeight: "bold",
  },
});
