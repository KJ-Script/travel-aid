import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import Detail from "./screens/Detail";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import TOS from "./screens/TOS";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={SignUp} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="tos" component={TOS} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
