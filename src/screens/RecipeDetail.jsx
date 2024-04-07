import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React, { useEffect } from "react";
import { useGetRecipesByIdQuery } from "../services/shopService";

const RecipeDetail = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = route.params;

  const {
    data: recipeFilteredById,
    isLoading,
    error
  } = useGetRecipesByIdQuery(id)

  useEffect(() => {
    if(recipeFilteredById){
      const result = Object.values(recipeFilteredById)
      setRecipe(result)
      console.log(recipe)
    }
  }, [recipeFilteredById]);

  if (recipe) {
    return (
      <SafeAreaView>
        <View>
          {/* <Image style={styles.images} source={receta.image} /> */}
          <Text>{recipe[0].name}</Text>
        </View>
        <View>
          <View>
            <View>{/* ImageChef */}</View>
            <View>
              <Text>{recipe[0].chef}</Text>
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
