import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { SelectList } from "react-native-dropdown-select-list";
import ItemCardContainer from "../components/ItemCardContainer";
import { ActivityIndicator } from "react-native";
import { restaurant } from "../api/restaurants";
import { hotel } from "../api/hotels";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const Discover = ({ route }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [query, setQuery] = useState();

  
  const userInfo = route.params.Discover;
  console.log("Discover INfo", userInfo);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(false);
    setInterval(() => {
      setIsLoading(true);
    }, 2000);
    //  })
  }, []);

  const fetchHotels = () => {
    axios
      .get("https://booking-com.p.rapidapi.com/v1/hotels/search", {
        params: {
          units: "metric",
          filter_by_currency: "AED",
          order_by: "popularity",
          checkin_date: "2023-08-18",
          locale: "en-gb",
          adults_number: "2",
          dest_id: query,
          dest_type: "city",
          checkout_date: "2023-08-19",
          room_number: "1",
          children_ages: "5,0",
          categories_filter_ids: "class::2,class::4,free_cancellation::1",
          include_adjacency: "true",
          children_number: "2",
          page_number: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "9fbedb06femsh71afdaca7dc1c04p1ff767jsn30e36f18306d",
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
        },
      })
      .then((response) => {
        const data = response.data.result;
        setMainData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("mainData ------------------ ", mainData);
  return (
    <SafeAreaView className="flex-1 bg-gray-50 relative">
      <View className="mt-[10%]">
        <View className="flex-row items-center justify-between px-8">
          <View>
            <Text className="text-[30px] text-purple-800 font-bold">
              Discover
            </Text>
            <Text className="text-[30px] text-cyan-300">
              the thrill in you.
            </Text>
          </View>

          <TouchableOpacity
            className="h-14 w-14 bg-gray-300 roundedmd items-center justify-center"
            onPress={() => {
              navigation.navigate("Profile", { Profile: userInfo });
            }}
          >
            <Image
              className="h-[75px] w-[75px] rounded-[100px]"
              source={Avatar}
            />
          </TouchableOpacity>
        </View>

        <SearchBar setQuery={setQuery} fetch={fetchHotels} />

        {/* Menu Container */}

        {isLoading ? (
          <ScrollView>
            <View>
              <View className="mx-6">
                <Text className="text-purple-800 text-xl font-semibold">
                  {selected}
                </Text>
              </View>
            </View>

            <View>
              <View className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap">
                {mainData.length > 0 ? (
                  <>
                    {mainData.map((item, index) => {
                      return <ItemCardContainer key={index} data={item} />;
                    })}
                  </>
                ) : (
                  <>
                <View className="items-center justify-center">
                  <Image className="w-36 h-36" source={NotFound} />
                  <Text className="my-3 text-xl text-purple-800">
                    oops, seems like nothing has been found
                  </Text>
                </View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        ) : (
          <View className="my-36">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Discover;
