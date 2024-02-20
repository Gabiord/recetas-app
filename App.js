import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';

import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.androidSafeArea}>
      <Navigator />
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