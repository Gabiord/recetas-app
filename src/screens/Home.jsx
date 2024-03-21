import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import CardList from "../components/CardList";
import IconsAssets from "../../assets/icons/IconsAssets";
import FilterModal from "../components/FilterModal";
import { colors } from "../global/colors";
import {
  setInputRecipeName,
  setModalVisible,
} from "../features/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";


const Home = ({ navigation }) => {
  const dispatch = useDispatch();


  const modalVisible = useSelector(
    (state) => state.shopReducer.value.modalVisible
  );

  return (
    <SafeAreaView style={styles.container}>
      <FilterModal modalVisible={modalVisible} />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(value) => dispatch(setInputRecipeName(value))}
          placeholder="Buscar por nombre"
        />
        <Pressable onPress={() => dispatch(setModalVisible())}>
          <Image style={styles.image} source={IconsAssets.filter} />
        </Pressable>
      </View>
      <CardList navigation={navigation} />
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
