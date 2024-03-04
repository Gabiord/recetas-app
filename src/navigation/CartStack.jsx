import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart"

const stack = createNativeStackNavigator();

export default function CartStack() {
    return(
        <stack.Navigator
            initialRouteName="Cart">
            <stack.Screen options={{headerShown: false}} name="Cart" component={Cart}/>
        </stack.Navigator>
    )
}