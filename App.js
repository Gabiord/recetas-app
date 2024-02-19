import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Home from './src/screens/Home'
import SplashScreen from './src/screens/SplashScreen';
import Recipe from './src/screens/Recipe';

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.androidSafeArea}>
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});