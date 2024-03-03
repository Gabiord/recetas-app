import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BookStack from "./BookStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="BookStack" component={BookStack}/>
                <Tab.Screen name="CartStack" component={CartStack}/>
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default TabNavigator