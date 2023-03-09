import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const detailData = route.params.Detail;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const supportedURL = detailData.url;

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <TouchableOpacity onPress={handlePress} className="w-[300px] bg-emerald-800 h-[50px] items-center justify-center rounded-[25px]"><Text className="text-white font-semibold">BOOK NOW</Text></TouchableOpacity>;
  };

  console.log(route.params.Detail);

  return (
    <View className=" bg-gray-300 h-[300vh]">
      <View className="mt-9 p-3 bg-gray-100 mx-4 rounded-[25px] items-center justify-center">
        <Text className="italic text-xl font-semibold text-purple-800">
          {detailData.hotel_name}
        </Text>
      </View>
      <View className="mt-2 items-centerrounded-md justify-center mx-5">
        <View className="my-1 h-[360px]">
          <View>
            <Image
              source={{ uri: detailData.max_photo_url }}
              className=" w-[100%] h-[40vh] rounded-lg"
            />
          </View>
        </View>
      </View>
      <ScrollView>
      <View className="items-center bg-gray-200 rounded-md py-6 mx-5 min-h-[45vh]">
        <View className="flex-row">
          <View className="p-3 bg-violet-500 rounded-[25px] w-[350px] items-center">
            <Text className="text-white">{detailData.hotel_name_trans}</Text>
          </View>
        </View>

        <View className="flex-row my-3 align-items justify-center">
          <View className="p-3 bg-violet-500 rounded-[25px] w-[150px] items-center mx-1">
            <Text className="text-white">{detailData.district}</Text>
          </View>
          <View className="p-3 bg-violet-500 rounded-[25px] w-[150px] items-center">
            <Text className="text-white">{detailData.address_trans}</Text>
          </View>
        </View>
        <View className="flex mx-6 my-2 items-center">
          <View className="p-3 bg-violet-500 rounded-[25px] w-[150px] items-center">
            <Text className="text-white">{detailData.review_score_word}</Text>
          </View>
          <View className="px-3 py-3 bg-violet-500 my-3 w-[350px] rounded-[30px] items-center justify-center">
            <Text className="text-white">
              Distance from city center: {detailData.distance_to_cc_formatted}
            </Text>
          </View>

          <View className="flex-row my-3 align-items justify-center">
            <View className="p-3 bg-violet-500 rounded-[25px] w-[150px] items-center mx-1">
              <Text className="text-white">{detailData.currencycode}</Text>
            </View>
            <View className="p-3 bg-violet-500 rounded-[25px] w-[150px] items-center">
              <Text className="text-white">{detailData.timezone}</Text>
            </View>
          </View>
            <OpenURLButton
              url={supportedURL}
              children={"Book Now"}
            ></OpenURLButton>

        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
