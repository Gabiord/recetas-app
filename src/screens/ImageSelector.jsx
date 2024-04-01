import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import {usePostProfileImageMutation} from "../services/authService"

const ImageSelector = ({navigation}) => {
    const image = useSelector((state) => state.authReducer.value.imageCamara)
    const localId = useSelector((state) => state.authReducer.value.localId)
    const [imageTaked, setImageTaked]= useState(image)
    const dispatch = useDispatch();

    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  

  const verifyCameraPermssions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    } else {
      return true;
    }
  };

  const pickImage = async () => {
    console.log("hola");
    const cameraPermssions = await verifyCameraPermssions();
    if (cameraPermssions) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 1
      });
      if (!result.canceled) {
        setImageTaked(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(imageTaked))
    triggerSaveProfileImage({ localId, image})
    navigation.goBack();
  };

  return (
    <View>
      {imageTaked ? (
        <View style={styles.container}>
          <Image source={{ uri: imageTaked }} style={styles.profileImageStyle} />
          <CustomButton
            title={"Tomar nueva foto"}
            focused={false}
            height={33}
            width={200}
            onPress={pickImage}
          />
          <CustomButton
            title={"Confirmar foto"}
            focused={false}
            height={33}
            width={200}
            onPress={confirmImage}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.profileImageStyle}
            source={require("../../assets/images/defaultProfileImage.png")}
          />
          <CustomButton
            title={"Tomar una foto"}
            focused={true}
            height={33}
            width={200}
            onPress={pickImage}
          />
          <CustomButton
            title={"Confirmar Foto"}
            focused={true}
            height={33}
            width={200}
            onPress={confirmImage}
          />
        </View>
      )}
    </View>
  );
};
export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 50,
    alignContent: "space-between",
  },

  profileImageStyle: {
    height: 200,
    width: 200,
    borderRadius: 150,
    alignSelf: "center",
    marginTop: 60,
    borderColor: colors.gray2,
    borderWidth: 1,
  },
});
