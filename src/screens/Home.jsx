import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import CardList from "../components/CardList";
import IconsAssets from "../../assets/icons/IconsAssets";
import FilterModal from "../components/FilterModal";
import { colors } from "../global/colors";
import { setInputRecipeName } from "../features/shop/shopSlice";
import { UseDispatch, useDispatch, useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const textInput = useSelector(
    (state) => state.shopReducer.value.inputRecipeName
  );

  const dispatch = useDispatch();

  console.log(textInput);

  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("");

  const onPressCategory = (prop) => {
    setCategory(prop);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FilterModal
        modalVisible={modalVisible}
        onPressCategory={onPressCategory}
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(value) => dispatch(setInputRecipeName(value))}
          placeholder="Buscar por nombre"
        />
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.image} source={IconsAssets.filter} />
        </Pressable>
      </View>
      <CardList
        category={category}
        textInput={textInput}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  TextInput: {
    width: 255,
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.gray4,
    marginRight: 17,
  },
  image: {
    width: 40,
    height: 40,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: "PoppinsBold",
    marginBottom: 10,
  },
});
