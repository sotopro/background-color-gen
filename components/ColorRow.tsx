import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

type ColorRowType = {
  item: string;
};

const ColorRow = ({ item }: ColorRowType) => {
  return (
    <View style={[styles.container, { backgroundColor: item }]}>
        <ThemedText style={styles.color}>{item}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 20,
  },
  color: {
    fontWeight: "bold",
  }
});

export default ColorRow;
