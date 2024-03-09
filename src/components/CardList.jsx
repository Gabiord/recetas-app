import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardList = ({ navigation }) => {

  const dataRecetas = useSelector(
    (state) => state.shopReducer.value.recipesFiltered
  );

  const numColumns = 2;

  const quantity = dataRecetas.length;

  return (
    <>
      <View style={styles.results}>
        <Text style={styles.text}>Resultados</Text>
        <Text style={styles.text}>{quantity} Recetas</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={dataRecetas}
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
