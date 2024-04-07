import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useGetRecipesByCategoryQuery, useGetRecipesQuery } from "../services/shopService";

const CardList = ({ navigation }) => {
  const numColumns = 2;

  const textInput = useSelector(
    (state) => state.shopReducer.value.inputRecipeName
  );

  const categorySelected = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );

  const [recipes, setRecipes] = useState([])

  const {
    data: recipesFilteredByCategory,
    isLoading,
    error,
  } = (categorySelected? useGetRecipesByCategoryQuery(categorySelected): useGetRecipesQuery()) 

  useEffect(() => {
    console.log(isLoading)
    if (recipesFilteredByCategory) {
      const recipesRaw = Object.values(recipesFilteredByCategory);
      const recipesFiltered = recipesRaw.filter((product) =>
        product.name.includes(textInput)
      );
      setRecipes(recipesFiltered);
    }
  }, [recipesFilteredByCategory, textInput]);


  return (
    <>
      <View style={styles.results}>
        <Text style={styles.text}>Resultados</Text>
        <Text style={styles.text}>{} Recetas</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={recipes}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <Card item={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {},
  results: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 15,
  },
});
