import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import axios from "axios";

function SearchBar({ setQuery, fetch }) {
  const [search, setSearch] = useState("");

  const fire = () => {
    axios
      .get("https://booking-com.p.rapidapi.com/v1/hotels/locations", {
        params: { 
            locale: "en-gb",
            name: search,
        },
        headers: {
            "X-RapidAPI-Key": "9fbedb06femsh71afdaca7dc1c04p1ff767jsn30e36f18306d",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          },
      })
      .then((response) => {
        console.log("Destination id:", response.data[0].dest_id);
        const id = response.data[0].dest_id
        setQuery(id)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("query: ", search);

  return (
    <View className="flex-row items-center bg-white shadow-lg px-4 mx-8 rounded-xl my-6">
      <TextInput
        className="h-[5vh] w-[75%] p-3"
        placeholder="search"
        onChangeText={(e) => {
          setSearch(e);
        }}
      />

      <Button
        title="search"
        onPress={() => {
          fire();
          fetch();
        }}
      />
    </View>
  );
}

export default SearchBar;
