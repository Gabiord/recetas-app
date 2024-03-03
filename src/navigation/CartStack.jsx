import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart"

const stack = createNativeStackNavigator();

export default function CartStack() {
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen options={{headerShown: true}} name="Cart" component={Cart}/>
        </stack.Navigator>
    </NavigationContainer>
}