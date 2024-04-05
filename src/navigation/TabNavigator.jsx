import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../global/colors";
import IconsAssets from "../../assets/icons/IconsAssets";
import CartStack from "./CartStack";
import NotificationsStack from "./NotificationsStack";
import HomeRecipeStack from "./HomeRecipeStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeRecipeStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.tabBarIcon}
                  source={focused ? IconsAssets.homeFocused : IconsAssets.home}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.tabBarIcon}
                  source={
                    focused ? IconsAssets.bookCartFocused : IconsAssets.bookCart
                  }
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="NotificationsStack"
          component={NotificationsStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.tabBarIcon}
                  source={
                    focused
                      ? IconsAssets.notificationBingFocused
                      : IconsAssets.notificationBing
                  }
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={styles.tabBarIcon}
                  source={
                    focused
                      ? IconsAssets.profileFocused
                      : IconsAssets.profile
                  }
                />
              );
            },
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    elevation: 4,
  },
});
