import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React, { useEffect } from "react";
import recetas from "../data/recetas.json";

const RecipeDetail = ({ navigation, route }) => {
  const [receta, setReceta] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    const recetaFinded = recetas.find((item) => item.id === id);
    setReceta(recetaFinded);
  }, [id]);

  if (receta) {
    return (
      <SafeAreaView>
        <View>
          {/* <Image style={styles.images} source={receta.image} /> */}
          <Text>{receta.name}</Text>
        </View>
        <View>
          <View>
            <View>{/* ImageChef */}</View>
            <View>
              <Text>{receta.chef}</Text>
              {/* Locacion Chef */}
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Follow</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Ingredient</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Procedure</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>1 Serve</Text>
            <Text>10 Items</Text>
          </View>
          {/* <SectionList></SectionList> */}
        </View>
      </SafeAreaView>
    );
  }
};

export default RecipeDetail;

const styles = StyleSheet.create({
  images: {
    height: "200",
    width: "200",
    resizeMode: "stretch",
  },
});
