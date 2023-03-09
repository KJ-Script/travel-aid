import { View, Text, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Avatar } from "../assets";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const Profile = ({route}) => {

  const [newUserName, setNewUserName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  const userInfo = route.params.Profile

  const changeUserName = () => {
      axios.post('http://192.168.201.225:8080/editname', {
        username: newUserName,
        id: userInfo._id
      }).then((response) => {
        console.log("Response", response)
      }).catch((err) => {
        console.log("Error - ", err)
      })
  }


  const changePassword = () => {
    axios.post('http://192.168.201.225:8080/editpass', {
      password: newPassword,
      id: userInfo._id
    }).then((response) => {
      console.log("Response", response)
    }).catch((err) => {
      console.log("Error - ", err)
    })
}
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log("User Information: ", userInfo)
  return (
    <View className="mt-[10%]">
      <View className="w-full h-screen items-center">
        <View className="bg-gray-300 h-[15vh] w-[90%] rounded-lg justify-end items-center px-2 flex-row">
            <Text className="text-[25px] text-cyan-800 italic font-semibold">Hello, {userInfo.firstName}</Text>
          <Image source={Avatar} className="w-[75px] h-[75px] rounded-[50px] ml-[70px]" />
        </View>

       

        <View className="bg-gray-300 h-[75vh] w-[90%] rounded-lg justify-center items-center px-2 my-9">

          <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%]">
            <TextInput
              placeholder="New Username"
              className="border rounded-md w-[100%] h-[5vh] px-4 border-gray-300"
              onChangeText={(e) => {
                setNewUserName(e)
              }}
            />

          </View>
            <TouchableOpacity className="p-3 bg-blue-300 rounded-[25px] mt-3" onPress={() => {
                changeUserName()
              }}>
              <Text className="text-white font-semibold">Change Username</Text>
            </TouchableOpacity>

          <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] mt-4">
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              className="border rounded-md w-[100%] h-[5vh] px-4 border-gray-300"
              onChangeText={(e) => {
                setNewPassword(e);
              }}
              />
          </View>

          <TouchableOpacity className="p-3 bg-blue-300 rounded-[25px] mt-3" onPress={() => {
            changePassword()
          }}>
              <Text className="text-white font-semibold">Change Password</Text>
            </TouchableOpacity>


            <View className="bg-white rounded-lg h-[30vh] w-full my-4 items-center justify-center">
                <View className="m-8">
                <Text className="text-[15px] my-3 p-3 text-white bg-purple-800 rounded-[25px]">FirstName: {userInfo.firstName}</Text>
                <Text className="text-[15px] mb-3 p-3 text-white bg-purple-800 rounded-[25px]">LastName: {userInfo.lastName}</Text>
                <Text className="text-[15px] p-3 text-white bg-purple-800 rounded-[25px]">Email: {userInfo.email}</Text>
                <Text className="text-[15px] my-3 p-3 text-white bg-purple-800 rounded-[25px]">UserName: {userInfo.username}</Text>
                </View>
            </View>

            <View className="ml-[230px]">
            <TouchableOpacity className="bg-blue-300 py-3 px-5 rounded-[25px]"><Text className="text-white" onPress={()=>{
              navigation.navigate('Login')
            }}>Logout</Text></TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
 