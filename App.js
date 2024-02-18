import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Home from './src/screens/Home'

export default function App() {

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});