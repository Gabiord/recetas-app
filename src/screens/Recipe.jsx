import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from "react-native";
import React from "react";

const receta = {
  name: "Sopa de lentejas",
  chef: "Juan Perez",
  rate: "3",
  image: {
    uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HP647TGBTUI6ZGYKHCUYHIXNZM.jpg",
  },
  category: "Vegetariano",
};

const Recipe = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Image style={styles.images} source={receta.image} /> */}
        <Text>{receta.name}</Text>
      </View>
      <View>
        <View>
          <View>
          {/* ImageChef */}
          </View>
          <View>
            <Text>{receta.chef}</Text>
            {/* Locacion Chef */}
          </View>
        </View>
        <View>
          <TouchableOpacity><Text>Follow</Text></TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity><Text>Ingredient</Text></TouchableOpacity>
        <TouchableOpacity><Text>Procedure</Text></TouchableOpacity>
        </View>
        <View>
          <Text>1 Serve</Text>
          <Text>10 Items</Text>
        </View>
        {/* <SectionList></SectionList> */}
      </View>
    </SafeAreaView>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  images: {
    height: "200",
    width: "200",
    resizeMode: "stretch",
  },
});
