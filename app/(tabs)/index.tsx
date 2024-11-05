import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorHistory } from "@/context";
import { getRgbColor, rgbToHex } from "@/utils";
import { useState } from "react";

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#4D6A6D");
  const { addColorToHistory } = useColorHistory();

  const onHandleGenerateBackground = () => {
    const color = {
      r: getRgbColor(),
      g: getRgbColor(),
      b: getRgbColor(),
    };

    const hexColor = rgbToHex(color.r, color.g, color.b)

    setBackgroundColor(hexColor);
    addColorToHistory(hexColor);
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <Pressable
        style={styles.pressbleBackground}
        onPress={onHandleGenerateBackground}
      >
        <ThemedText type="title">Hello there</ThemedText>
        <ThemedText>{backgroundColor}</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressbleBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
