import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useState } from "react";

const FilterModal = ({ modalVisible, onPressCategory }) => {

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <TouchableOpacity style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Buscador por Flitro</Text>
            <Text>Categoria</Text>
            <View style={styles.category}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressCategory("")}
              >
                <Text>Todos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressCategory("Desayuno")}
              >
                <Text>Desayunos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressCategory("Almuerzo")}
              >
                <Text>Almuerzos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressCategory("Cena")}
              >
                <Text>Cena</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressCategory("Vegetariano")}
              >
                <Text>Vegetariano</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1

  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    width: "100%",
    height: 450,
    margin: 20,
    backgroundColor: "#ffffff",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 30,
    margin: 5,
  },
  category: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
