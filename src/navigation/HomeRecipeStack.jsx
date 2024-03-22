import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import RecipeDetail from "../screens/RecipeDetail";
import { Text, StyleSheet } from "react-native";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const stack = createNativeStackNavigator();

export default function HomeRecipeStack() {
  return (
    <stack.Navigator
      screenOptions={({ route }) => ({
        headerTitle: () => {
          return (
            <Text style={styles.headerText}>
              {route.name === "Home" ? "Buscar Receta" : "Detalle Receta"}
            </Text>
          );
        },
        headerTitleAlign: "center",
      })}
    >
      <stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
      <stack.Screen
        options={{ headerShown: true }}
        name="Home"
        component={Home}
      />
      <stack.Screen
        options={{ headerShown: true }}
        name="RecipeDetail"
        component={RecipeDetail}
      />
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
  },
  headerText: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
});
