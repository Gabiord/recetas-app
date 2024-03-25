import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { colors } from "../global/colors";
import IconsAssets from "../../assets/icons/IconsAssets";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signUpSchema } from "../validations/signUpSchema";
import Swal from 'sweetalert2'

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      signUpSchema.validateSync({
        name,
        email,
        password,
        passwordConfirm,
        toggleCheckBox
      });

    } catch (error) {
      console.log(error)
      };
    
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <ScrollView style={styles.container} persistentScrollbar={false}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Hola,</Text>
        <Text style={styles.subtitleText}>Vamos a crear una nueva cuenta,</Text>
        <Text style={styles.subtitleText}>no tomara mucho tiempo.</Text>
      </View>
      <InputForm
        label={"Nombre"}
        placeholder={"Ingresar Nombre"}
        onChange={setName}
      />
      <InputForm
        label={"Email"}
        placeholder={"Ingresar Email"}
        onChange={setEmail}
      />
      <InputForm
        label={"Contraseña"}
        placeholder={"Ingresar Contraseña"}
        onChange={setPassword}
        isSecure={true}
      />
      <InputForm
        label={"Repetir Contraseña"}
        placeholder={"Ingresar Contraseña"}
        onChange={setPasswordConfirm}
        isSecure={true}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={toggleCheckBox}
          onValueChange={(newValue) => {
            setToggleCheckBox(newValue);
          }}
          color={colors.secondary100}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("ToS");
          }}
        >
          <Text style={styles.yellowText}>
            Acepto los terminos & condiciones
          </Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <SubmitButton title={"Registrarse"} onSubmit={onSubmit} />
        <Text style={styles.slashLine}>- O iniciar Sesion Con -</Text>
        <View style={styles.rowContainer}>
          <Image source={IconsAssets.google} />
          <Image source={IconsAssets.facebook} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.haveAccountText}>Ya tienes Cuenta? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.yellowText}>Iniciar Sesion</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    paddingTop: StatusBar.currentHeight + 30,
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
    marginLeft: 10,
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
  slashLine: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.gray3,
    marginTop: 25,
  },
  rowContainer: {
    flexDirection: "row",
    margin: 10,
  },
  haveAccountText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: colors.black,
  },
});
