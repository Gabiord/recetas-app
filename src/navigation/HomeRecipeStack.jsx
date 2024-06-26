import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import RecipeDetail from "../screens/RecipeDetail";
import { Text, StyleSheet } from "react-native";

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
