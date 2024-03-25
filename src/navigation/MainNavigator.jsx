import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainNavigator = () => {

    const user = useSelector(state => state.authReducer.value.user)
    const token = useSelector(state => state.authReducer.value.token)

  return (user? <TabNavigator /> : <AuthStack />)
}

export default MainNavigator;