import { View, Text, TextInput, SafeAreaView, Image, CheckBox, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Restaurants } from '../assets';
import axios from 'axios';

const LogIn = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    

    const validate = () => {
      axios.post('http://192.168.201.225:8080/validate', {
        username,
        password
      }).then((response) => {
        const account = response.data
        if(account.status === "ok") {
          console.log("Logged In")
          navigation.navigate('Discover', {Discover: account.user})
        } else {
          console.log("Auth req not met")
        }
      }).catch((err) => {
        console.log("Error", err)
      })
    }

    console.log(".......................",username)
  return (
    <View className=" bg-white py-36 items-center  min-h-screen">
      <Image source={Restaurants} className='w-[150px] h-[150px] mb-4'/>
      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%]">
      <TextInput placeholder='Username' className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e)=>{
        setUserName(e);
      }}/>
      </View>

      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] my-2">
      <TextInput placeholder='Password' secureTextEntry={true} className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e) =>{
        setPassword(e)
      }}/>
      </View>

      <View className="my-3 shadow-lg shadow-pink-200">
        <TouchableOpacity className="w-[150px] h-[6vh] bg-blue-400 rounded-[30px] items-center justify-center" onPress={() => {
          validate()
        }}>
          <Text className="text-white text-[20px] font-semibold">LogIn</Text>
        </TouchableOpacity>
      </View>

    <View>
      <Text>Dont have an account?</Text>
      <TouchableOpacity className="my-1 items-center justify-center"><Text className="underline py-1" onPress={() => {
        navigation.navigate('Create')
      }}>Create an Account</Text></TouchableOpacity>
    </View>


    <View className="mt-64">
      <TouchableOpacity className="my-1 items-center justify-center"><Text className="underline py-1" onPress={() => {
        navigation.navigate('tos')
      }}>Terms and Services</Text></TouchableOpacity>
    </View>
    </View>
  )
}

export default LogIn