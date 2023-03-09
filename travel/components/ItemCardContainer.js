import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeroImage, NotFound, not } from "../assets";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({data}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity className="rounded-md space-y-2 shadow-md object-cover w-[96%] bg-gray-200 my-2 items-center justify-center" onPress={
      () => {
        navigation.navigate("Detail", {Detail: data})
      }
    }>
      {/* <Image className="w-[99%] h-[300px] rounded-md" source={} /> */}
        <Image source={{uri: data.max_photo_url}} className=" w-[100%] h-[25vh] rounded-t-lg"/>
      <View className="item-center justify-center w-full rounded-lg mb-3">
        <View className="w-full items-center justify-center">
        <Text className="text-xl text-purple-800 font-semibold justify-center items-center px-6">{data?.hotel_name_trans}</Text>
        <Text className="text-md text-cyan-600">{data.address_trans}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
