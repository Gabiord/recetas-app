import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import SplashScreen from "../screens/SplashScreen"
import Recipe from "../screens/Recipe"

export default function Navigator() {
    const stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
        <stack.Navigator>            
            <stack.Screen name="SplashScreen" component={SplashScreen}/>
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="Recipe" component={Recipe}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}