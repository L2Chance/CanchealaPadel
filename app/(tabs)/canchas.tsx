import React from "react";
import MyCard from "../../components/Card";
import { View, StyleSheet, ScrollView } from "react-native";

export default function HolaCanchas() {
  return (
    <View style={styles.contenedor_general}>
      <ScrollView contentContainerStyle={styles.contenedor_card}>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor_general: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contenedor_card: {
    width: "90%",
    gap: 20,
  },
});
