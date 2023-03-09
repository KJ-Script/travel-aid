import { View, Text, TextInput, Image, CheckBox, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Restaurants } from '../assets';
import axios from 'axios';

const SignUp = () => {

    const [username, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const registerAccount = () => {
      axios.post('http://192.168.201.225:8080/createUser', {
        firstName,
        lastName,
        username,
        email,
        password,
      }).then((response) => {
        console.log("Response", response.data);
        navigation.navigate('Login')
      }).catch((err) =>{
        console.log("error: ", err);
      })
    }



    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
<View className=" bg-white py-8 items-center  min-h-screen">
      <Image source={Restaurants} className='w-[150px] h-[150px] mb-4'/>
      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] mb-2">
      <TextInput placeholder='FirstName' className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e)=>{
        setFirstName(e);
      }}/>
      </View>

      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] mb-2">
      <TextInput placeholder='LastName' className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e)=>{
        setLastName(e);
      }}/>
      </View>

      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] mb-2">
      <TextInput placeholder='Username' className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e)=>{
        setUserName(e);
      }}/>
      </View>

      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%]">
      <TextInput placeholder='Email' className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e)=>{
        setEmail(e);
      }}/>
      </View>

      <View className="items-center justify-center shadow-lg h-[vh] bg-white w-[80%] my-2">
      <TextInput placeholder='Password' secureTextEntry={true} className="border rounded-[25px] w-[100%] h-[5vh] px-4 border-gray-300" onChangeText={(e) =>{
        setPassword(e)
      }}/>
      </View>

      <View className="my-3 shadow-lg shadow-pink-200">
        <TouchableOpacity className="w-[150px] h-[6vh] bg-blue-400 rounded-[30px] items-center justify-center">
          <Text className="text-white text-[20px] font-semibold" onPress={() => {
            registerAccount()
          }}>SignUp</Text>
        </TouchableOpacity>
      </View>

    <View>
      <Text>Already Have an account?</Text>
      <TouchableOpacity className="my-1 items-center justify-center"><Text className="underline py-1" onPress={() => {
        navigation.navigate('Login')
      }}>Login</Text></TouchableOpacity>
    </View>


    <View className="mt-16">
      <TouchableOpacity className="my-1 items-center justify-center"><Text className="underline py-1" onPress={() => {
        navigation.navigate('tos')
      }}>Terms and Services</Text></TouchableOpacity>
    </View>
    </View>
  )
}

export default SignUp