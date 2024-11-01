import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";

export default function App() {
  const data = [30, 10, 25, 18, 17];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: "#FF0000",
    },
  }));
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Gráfico PieChart</Text>
      </View>
      <View>
        <PieChart style={{ height: 400 }} data={pieData}>
        
        </PieChart> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  textContainer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
