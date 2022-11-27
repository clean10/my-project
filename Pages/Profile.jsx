import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, LinearGradient, Image, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BiSearch } from "react-icons/bs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Profile({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.all}>
      <View style={styles.info}>
        <Text style={styles.prof}>Profile</Text>
        <Image style={styles.profile} source={require("../assets/charles.jpg")} />
        <Text style={styles.nama}>Charles Andriansyah</Text>
        <Text style={styles.email}>charlesandriansyah104@gmail.com</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.atas}>Username</Text>
        <Text style={styles.bawah}>Charles Andriansyah</Text>
        <Text style={styles.atas}>Full Name</Text>
        <Text style={styles.bawah}>Charles Andriansyah</Text>
        <Text style={styles.atas}>Email</Text>
        <Text style={styles.bawah}>Charlesandriansyah104@gmail.com</Text>
        <View style={styles.logout}>
          <TouchableOpacity>
            <Text style={styles.logouttext}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  all: {},
  prof: {
    fontSize: 30,
    marginLeft: 140,
    marginTop: 30,
    color: "white",
    fontWeight: "600",
  },
  info: { backgroundColor: "#2C2121", borderRadius: 20, paddingBottom: 50 },
  profile: {
    width: 150,
    height: 150,
    marginTop: 70,
    marginLeft: 110,
    borderRadius: 60,
  },
  nama: {
    fontSize: 20,
    color: "white",
    marginLeft: 100,
    marginTop: 30,
    fontWeight: "600",
  },
  email: {
    color: "white",
    fontSize: 9,
    fontWeight: "300",
    marginLeft: 115,
  },
  tab: {
    marginTop: 40,
    marginLeft: 40,
    marginEnd: 20,
    width: 300,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#00000",
  },
  atas: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2E2E2E",
    paddingBottom: 15,
    marginLeft: 20,
  },
  bawah: {
    fontSize: 15,
    fontWeight: "400",
    color: "#2E2E2E",
    marginLeft: 20,
    paddingBottom: 10,
  },
  logout: {
    borderWidth: 2,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    height: 50,
    marginTop: 20,
  },
  logouttext: {
    color: "red",
    fontWeight: "500",
  },
});