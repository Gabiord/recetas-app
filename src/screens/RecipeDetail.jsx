import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground
} from "react-native";
import { useState } from "react";
import React, { useEffect } from "react";
import { useGetRecipesByIdQuery } from "../services/shopService";
import { registerWebModule } from "expo";

const RecipeDetail = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState(null);
  const [procedure, setProcedure] = useState(null)
  const [image, setImage] = useState(null)
  const { id } = route.params;

  const {
    data: recipeFilteredById,
    isLoading,
    error
  } = useGetRecipesByIdQuery(id)

  useEffect(() => {
    if (recipeFilteredById) {
      const result = Object.values(recipeFilteredById)
      setRecipe(result)
      setProcedure(result[0].procedure)
      setImage(result[0].image)
      console.log(result[0].image)
    }
  }, [recipeFilteredById]);

  if (recipe) {
    return (
      <SafeAreaView>
        <View>
          <View>
                <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}
      ><Text>Inside</Text></ImageBackground> 
          </View>
          <Text>{recipe[0].name}</Text>
        </View>
        <View>

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
              <Text>Procedimiento</Text>
              <View>
                <FlatList
                  data={procedure}
                  renderItem={({ item }) => <Text style={styles.item}> {item.step}. {item.name}</Text>}
                />
              </View>

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
