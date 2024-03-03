
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import Recipe from "../screens/Recipe";
import { Text, StyleSheet, View } from "react-native";

export default function BookStack() {
  const stack = createNativeStackNavigator();

  return (
      <stack.Navigator
        screenOptions={({ route }) => ({
          headerTitle: () => {
            return(
              <Text style={styles.headerText}>{
              route.name === "Home"
                ? "Buscar Receta"
                : "Detalle Receta"
              }</Text>
            )
          },
          headerTitleAlign: "center",
        })}
      >
        <stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
        <stack.Screen options={{headerShown: true}} name="Home" component={Home} />
        <stack.Screen options={{headerShown: true}}name="Recipe" component={Recipe} />
      </stack.Navigator>
  );
}

const styles = StyleSheet.create({

  headerContainer:{
    backgroundColor: "red"
  },
  headerText: {
    fontFamily: "PoppinsBold",
    fontSize: 18

  }
});