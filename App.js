import { StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./components/Home";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
        <Navbar />
        <Home/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
