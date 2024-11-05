import ColorRow from "@/components/ColorRow";
import { ThemedView } from "@/components/ThemedView";
import { useColorHistory } from "@/context";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  const { colorHistory } = useColorHistory();
  return (
    <SafeAreaView style={styles.container}>
    <ThemedView style={styles.container}>
      <FlatList
        data={colorHistory}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item}) => <ColorRow item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    gap: 5,
  }
});
