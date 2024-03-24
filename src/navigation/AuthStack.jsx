import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/SplashScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";

const stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <NavigationContainer>
    <stack.Navigator
    initialRouteName = "SplashScreen"
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

    </stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack
