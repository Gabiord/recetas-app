import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";

const stack = createNativeStackNavigator();

export default function ProfileStack () {
    return(
    <stack.Navigator>
        <stack.Screen name="Profile" component={Profile}/>
        <stack.Screen name="Image Selector" component={ImageSelector}/>
    </stack.Navigator>
    )
}