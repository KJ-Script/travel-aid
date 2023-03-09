import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <View className="mt-[10%]">
        <View className="flex-row px-6 mt-8 items-center space-x-1">
          <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-cyan-500 font-semibold text-3xl">
              Go
            </Text>
          </View>

          <Text className="text-purple-800 font-semibold text-3xl">
            Travel
          </Text>
        </View>

        <View className="px-6 mt-8 space-y-0">
          <Text className="text-purple-800 text-[30px]">
            To travel is to experience,
          </Text>
          <Text className="text-cyan-500 text-[32px] font-bold">
            To experience is to live
          </Text>

          <Text className="text-purple-800 text-base py-4">
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem      
          </Text>
        </View>

        <View className="w-[400px] h-[400px] bg-cyan-400 rounded-full absolute top-96 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-purple-400 rounded-full absolute -bottom-[700px] right-[205px]"></View>
      
        <View classNaame="flex-1 relative items-center justify-content">
           <Animatable.Image
           animation="fadeIn"
           easing="ease-in-out"
           source={HeroImage}
           />
        </View>

        <View className="absolute top-[750px] w-20 h-20 rounded-full items-center justify-center border-l-2 border-r-2 border-t-4 border-cyan-600 mx-[35%] mb-[10px]">
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login")
            }}>
            <Animatable.View animation="pulse" easing="ease-in-out" iterationCount={"infinite"} className="bg-cyan-200 w-[85px] h-[55px] items-center justify-center rounded-full">
                <Text className="text-white text-[35px] font-light">Go</Text>
            </Animatable.View>
            </TouchableOpacity>
        </View>
      
      
      
      
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
