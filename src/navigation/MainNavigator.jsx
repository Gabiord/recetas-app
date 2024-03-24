import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useState } from "react";

const MainNavigator = () => {
    const [auth, setAuth]= useState(false)

  return (auth? <TabNavigator /> : <AuthStack />)
}

export default MainNavigator;