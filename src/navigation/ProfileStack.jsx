import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

const stack = createNativeStackNavigator();

export default function ProfileStack () {
    return(
    <stack.Navigator>
        <stack.Screen name="Profile" component={Profile} />
    </stack.Navigator>
    )
}