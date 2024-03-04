import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from "../screens/Notifications";

const stack = createNativeStackNavigator();

export default function NotificationsStack () {
    return(
    <stack.Navigator>
        <stack.Screen name="Notifications" component={Notifications} />
    </stack.Navigator>
    )
}