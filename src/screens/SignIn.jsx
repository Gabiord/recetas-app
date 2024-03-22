import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import IconsAssets from "../../assets/icons/IconsAssets";

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Hola,</Text>
        <Text style={styles.subtitleText}>Bienvenid@ de vuelta!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Email</Text>
        <TextInput style={styles.inputForm} placeholder="Enter Email" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Contraseña</Text>
        <TextInput style={styles.inputForm} placeholder="Enter Contraseña" />
      </View>
      <Pressable>
        <Text style={styles.yellowText}>Olvidaste tu Contraseña?</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <View style={styles.btnContainerStyle}>
          <Text style={styles.btnTextStyle}> Inicia Sesion ➜</Text>
        </View>
        <Text style={styles.slashLine}>- O iniciar Sesion Con -</Text>
        <View style={styles.rowContainer}>
          <Image source={IconsAssets.google} />
          <Image source={IconsAssets.facebook} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.haveAccountText}>No tienes Cuenta? </Text>
          <Pressable onPress={()=>{navigation.navigate("SignUp")}}>
            <Text style={styles.yellowText}>
              Crear cuenta
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 80,
  },
  topContainer:{
    paddingTop:20,
    paddingBottom: 30,
  },
  bottomContainer: {
    alignItems: "center",
  },
  titleText: {
    fontFamily: "PoppinsBold",
    fontSize: 30,
  },
  subtitleText: {
    fontFamily: "PoppinsRegular",
    fontSize: 20,
  },
  inputContainer:{
    marginBottom: 25,
  },
  inputName: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    marginBottom:10
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
  yellowText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.secondary100,
  },
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
  slashLine: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.gray3,
    marginTop:25
  },
  rowContainer: {
    flexDirection: "row",
    margin:20
  },
  haveAccountText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.black,
  },
});
