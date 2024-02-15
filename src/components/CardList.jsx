import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import recetas from "../data/recetas.json";

const CardList = ({ category, textInput }) => {
  const [dataRecetas, setDataRecetas] = useState(recetas);

  const numColumns = 2;

  const categoryFilter = category
    ? dataRecetas.filter((receta) => receta.category === category)
    : dataRecetas;

  const nameFilter = textInput
    ? categoryFilter.filter((receta) => receta.name.includes(textInput))
    : categoryFilter;

  const quantity = nameFilter.length;

  return (
    <>
      <View style={styles.results}>

      <Text style={styles.text}>Resultados</Text>
      <Text style={styles.text}>{quantity} Recetas</Text>
        </View>
      <View style={styles.container}>
        <FlatList
          data={nameFilter}
          numColumns={numColumns}
          renderItem={({ item }) => <Card item={item} />}
          />
      </View>
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {},
  results:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin:10
    
  },
  text:{
    fontFamily:"PoppinsRegular",
    fontSize:15
  }
});
