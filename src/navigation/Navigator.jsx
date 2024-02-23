import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import Recipe from "../screens/Recipe";
import { Text, StyleSheet } from "react-native";

export default function Navigator() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "PoppinsBold",
    fontSize: 18

  }
});