import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LocationSelector from "./LocationSelector";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import ProfileRecipesList from "../components/ProfileRecipesList";
import { colors } from "../global/colors";

const Profile = ({navigation}) => {
  const user = useSelector((state) => state.authReducer.value);
  const profileImage = useSelector((state) => state.authReducer.value.imageCamara)

  return (
    <View style={styles.container}>
      <View style= {styles.topContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Image Selector")}>
          {profileImage? <Image style={styles.profileImageStyle} source={{ uri: profileImage }}/> : <Image style={styles.profileImageStyle} source={require("../../assets/images/defaultProfileImage.png")} /> }
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.smallFontProfile}>Recetas</Text>
          <Text style={{...styles.bigFontProfile, textAlign: "center"}}>4</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.smallFontProfile}>Seguidores</Text>
          <Text style={{...styles.bigFontProfile, textAlign: "center"}}>2.5M</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.smallFontProfile}>Seguidos</Text>
          <Text style={{...styles.bigFontProfile, textAlign: "center"}}>259</Text>
        </View>
      </View>
      <View style= {styles.infoContainer}>
        <Text style= {styles.bigFontProfile}>{user.displayName}</Text>
        <Text style= {{...styles.smallFontProfile, marginBottom:15}}>Chef</Text>        
        <Text style= {styles.smallFontProfile}>
          Private Chef Passionate about food and life 🥘🍲🍝🍱
        </Text>
      </View>
      <View>

      </View>
      <View style={styles.flexRow}>
        <CustomButton title={"Recetas"} focused={true} height={33} width={107}/>
        <CustomButton title={"Videos"} focused={false} height={33} width={107}/>
        <CustomButton title={"Ubicacion"} focused={false} height={33} width={107}/>
      </View>
      <View>
        <ProfileRecipesList />
      </View>
      <LocationSelector />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
    display: "flex",
    flexDirection: "row",
    margin:15
  },
  infoContainer:{
    margin: 10
  },
  smallFontProfile:{
    fontFamily: "PoppinsRegular",
    color: colors.gray3,
    fontSize:15
  },
  bigFontProfile:{
    fontFamily: "PoppinsBold",
    color: colors.black,
    fontSize:20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15
                                    
  },
  profileImageStyle: {
    height: 100,
    width:100,
    borderRadius: 150
  }
  }
);
