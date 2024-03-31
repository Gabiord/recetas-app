import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSession } from "../db";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

const MainNavigator = () => {
  const user = useSelector((state) => state.authReducer.value.localId);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      try {
        const session = await fetchSession()
        console.log(session)
        if(session.rows._array.length){
          console.log("si")
          const savedUser = session.rows._array[0];
          dispatch(setUser(savedUser))
          console.log(savedUser)
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  

  return ( user ? <TabNavigator /> : <AuthStack />)
};

export default MainNavigator;
