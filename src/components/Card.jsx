import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";


const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("RecipeDetail", {id: item.id})}}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={styles.container}
      >
        <View>
          <Text>*</Text>
          <Text>{item.rate}</Text>
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.chef}>By {item.chef}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: 150,
    height: 150,
    margin: 20,
  },
  name: {
    color: colors.white,
    fontFamily: "PoppinsBold",
    fontSize: 16.5,
  },
  chef: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: colors.gray3,
  },
});
