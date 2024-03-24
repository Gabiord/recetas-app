import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import IconsAssets from "../../assets/icons/IconsAssets";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";

const SignIn = ({navigation}) => {

  const onSubmit = () => {}

  const onChange = () => {null}

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Hola,</Text>
        <Text style={styles.subtitleText}>Bienvenid@ de vuelta!</Text>
      </View>
      <InputForm label={"Email"} placeholder={"Enter Email"} />
      <InputForm label={"Contraseña"} placeholder={"Enter Contraseña"} />
      <Pressable>
        <Text style={styles.yellowText}>Olvidaste tu Contraseña?</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <SubmitButton title={"Inicia Sesion ➜"} onSubmit={onSubmit}/>
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
