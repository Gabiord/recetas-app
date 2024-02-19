import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import IconsAssets from "../../assets/icons/IconsAssets";
import { colors } from "../global/colors";

const background = require("../../assets/images/splashScreen_backgroundImage.jpg");

const SplashScreen = () => {
  return (
    <ImageBackground
      source={background}
      style={styles.backgroundImage}
      imageStyle={{ backgroundColor: colors.black, opacity: 0.9 }}
    >
      <LinearGradient
        colors={["transparent",colors.black]}
        style= {styles.gradient}>

      <View style={styles.screenView}>
        <Image style={styles.logoTop} source={IconsAssets.logo} />
        <Text style={styles.textTop}>100K+ Recetas Premium </Text>
      </View>
      <View style={styles.screenView}>
        <View>
          <Text style={styles.textBelow}>Get         Cooking</Text>
          <Text style={styles.textEnd}>La manera mas simple de cocinar</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btnContainerStyle}>
            <Text style={styles.btnTextStyle}> Comenzar    ➜</Text>
          </View>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  gradient:{
    flex:1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  screenView: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoTop: {
    width: 79,
    height: 79,
  },
  textTop: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "PoppinsBold",
    marginTop: 27,
  },
  textBelow: {
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  textEnd: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    marginTop:10
  },
  btnContainerStyle: {
    backgroundColor: colors.primary100,
    width: 243,
    height: 54,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 70,
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontWeight: "bold",
  },
});
