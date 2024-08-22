import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#000000");

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color)
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.touchPad}
        onPress={getRandomColor}
      >
        <View style={[styles.content, { backgroundColor: color }]}>
          <Text style={styles.paragraph}>Hello there</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  content: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  touchPad: {
    flex: 1,
    backgroundColor: "blue",
  },
});
