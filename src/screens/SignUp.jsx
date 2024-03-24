import { ScrollView, StyleSheet, Text, View, TextInput, Pressable, Image, StatusBar } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { colors } from "../global/colors";
import IconsAssets from "../../assets/icons/IconsAssets";
import InputForm from "../components/InputForm"

const SignUp = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onChange = () => {}

  return (
    <ScrollView style={styles.container} persistentScrollbar={false}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Hola,</Text>
        <Text style={styles.subtitleText}>
          Vamos a crear una nueva cuenta,
        </Text>
        <Text style={styles.subtitleText}>no tomara mucho tiempo.</Text>
      </View>
      <InputForm label={"Nombre"} placeholder={"Ingresar Nombre"} onChange={onChange} />
      <InputForm label={"Email"} placeholder={"Ingresar Email"} onChange={onChange} />
      <InputForm label={"Contraseña"} placeholder={"Ingresar Contraseña"} onChange={onChange} />
      <InputForm label={"Repetir Contraseña"} placeholder={"Ingresar Contraseña"} onChange={onChange} />
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={toggleCheckBox}
          onValueChange={(newValue) => {
            setToggleCheckBox(newValue);
            console.log(toggleCheckBox);
          }}
          color={colors.secondary100}
        />
        <Pressable>
          <Text style={styles.yellowText}>
            Acepto los terminos & condiciones
          </Text>
        </Pressable>
      </View>
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
          <Text style={styles.haveAccountText}>Ya tienes Cuenta? </Text>
          <Pressable onPress={()=>{navigation.navigate("SignIn")}}>
            <Text style={styles.yellowText}>
              Iniciar Sesion
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView >
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: "center",
    paddingTop: StatusBar.currentHeight+30
  },
  topContainer: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  bottomContainer: {
    alignItems: "center",
  },
  titleText: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
  subtitleText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft:10
  },
  checkbox: {
    ColorValue: colors.secondary100,
  },
  yellowText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.secondary100,
    marginLeft: 5,
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
    margin:10
  },
  haveAccountText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.black,
  },
});
